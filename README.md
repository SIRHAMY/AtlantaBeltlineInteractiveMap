*This work was done as part of a class assignment for Georgia Tech's CS4464/6465 Fall 2016 (https://github.com/jacobeisenstein/gt-compj-class/). The opinions expressed here, if any, are solely those of the students working on this assignment and not of the Instructor or Georgia Tech*

My project is hosted [on my website](http://sirhamy.com/projects/ATLBeltline/).

## Description of Efforts

I was finally able to get the NPU map of Atlanta all choroplethed. I wasted a lot of time trying to work with one of Atlanta GIS' NPU Shapefiles. Turns out that their formatting was wonky. Once I figured that out, development went pretty smoothly.

I used D3 for all of my mapping functionality. I gathered crime data from APD, sorted it by year, then counted the number of crimes per year per NPU. This left me with year over year change in crime numbers by NPU.

I then got an NPU map from Atlanta GIS and plotted it using D3. AFter that, I used the crime change numbers I calculated to run a gradient over each of the NPU shapes I plotted, essentially turning it into a choropleth.

I wanted to map the location of the Atlanta Beltline over this map to try and match up any possible crime trends with their proximity to Beltline projects. There were a few issues with this approach.

First of all, the crime data itself showed a large amount of variance with some NPUs seeing crime changes in the thousands. Moreover, any correlation that might be seen with the Beltline could probably also be attributed to other factors. Overall, it seems there's a downward trend in crime over time which makes it hard to figure out where the project fits in.

Another big snag was that Beltline GIS data is severely limited. There are very few, if any, files holding just the beltline coordinates. As I"m doing change over time, I wanted to show the progress of the beltline in tandem with the crime data it overlayed. However, the same issue of lack of data is exacerbated as you go further back. As such, I relented to just have the current beltline progress up (I had to manually do this).

## Sources

The point of my visualization was to compare the crime rates in each NPU with the progress of the Beltline. My hypothesis was that Crime rates would drop in areas surrounding the Beltline and rates would either increase or remain the same in areas further out. The idea was to map the NPUs as a choropleth and then overlay the coordinates of the Beltline in each year for which I had crime data. You could then toggle through the different years to see the Beltlines progress as well as crime data for the surrounding areas.

Got the BAD NPU shapefile from [Atlanta's GIS website](http://data.coaplan.opendata.arcgis.com/datasets/96338c8754654167aa981279a0a6f799_1)

Got the GOOD one from [here](http://data.coaplan.opendata.arcgis.com/datasets/f3c1ad1dd80d4227bf6dd7ada928b647_0)

Used [ogre]( https://ogre.adc4gis.com/) to convert the NPU shapefile to geoJson. I also downloaded the GLAD and TopoJson converters as [suggested here](https://bost.ocks.org/mike/map/)

Got [Atlanta's Crime Data](http://www.atlantapd.org/crimedatadownloads.aspx) for the past 5 years from APD's website

Used the Python Pandas library/framework to read through the CSV files, as well as filter out incorrectly logged data, perform the crime by NPU counts, and calculate the year over year crime change by NPU.

I used Inkscape and GIMP to create some of the overlays. JQuery to deal with button clicks and rerendering when a new year is selected.

Attempted to use both LeafletJS and D3JS to create the map front ends. I ended up getting stuck with both at different points. With LeafletJS, I was unable to get they're official tutorial working, so I dropped it. As stated earlier, I was unable to get D3 to show each individual NPU a different color, which makes the visualization pretty useless. Eventually figured it out, but definitely not a linear approach.
