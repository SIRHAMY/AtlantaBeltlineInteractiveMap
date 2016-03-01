*This work was done as part of a class assignment for Georgia Tech's CS4464/6465 Fall 2016 (https://github.com/jacobeisenstein/gt-compj-class/). The opinions expressed here, if any, are solely those of the students working on this assignment and not of the Instructor or Georgia Tech*

This is where [I got stuck in D3](http://sirhamy.com/projects/ATLBeltline/)

Slightly better visualization on Fusion Tables - Add a Filter by year to be close to what I wanted:

[Fusion Table](https://www.google.com/fusiontables/DataSource?docid=1RuFVwr39O6xRXmpR3DME--RpOSG9VxPjjaSTTjzo)

Unfortunately, it doesn't appear that Fusion Tables has the ability to overlay another map over the original, so I couldn't put the Atlanta Beltline trail markers on top of the choropleth.

## Description of Efforts

Welp, I ended up going with Fusion Tables because D3 wasn't being very kind to me. My code is up if you want to see it, but I know a big part of the grade was getting the whole thing working, which is why I resorted to Fusion Tables at the last second.

For D3, I was able to get the Atlanta NPU map up, overlayed with the data concerning year over year crime change in each NPU. However, I couldn't get D3 to color each NPU separately, leaving the map either black (default) or whatever the last NPU was colored based on my gradient color scheme.

Spent tons of hours trying to fix what I assumed would be a pretty easy task.

## Sources

The point of my visualization was to compare the crime rates in each NPU with the progress of the Beltline. My hypothesis was that Crime rates would drop in areas surrounding the Beltline and rates would either increase or remain the same in areas further out. The idea was to map the NPUs as a choropleth and then overlay the coordinates of the Beltline in each year for which I had crime data. You could then toggle through the different years to see the Beltlines progress as well as crime data for the surrounding areas.

Got the NPU shapefile from [Atlanta's GIS website](http://data.coaplan.opendata.arcgis.com/datasets/96338c8754654167aa981279a0a6f799_1)

Used [ogre]( https://ogre.adc4gis.com/) to convert the NPU shapefile to geoJson

Got [Atlanta's Crime Data](http://www.atlantapd.org/crimedatadownloads.aspx) for the past 5 years from APD's website

Used the Python Pandas library/framework to read through the CSV files, as well as filter out incorrectly logged data, perform the crime by NPU counts, and calculate the year over year crime change by NPU.

Attempted to use both LeafletJS and D3JS to create the map front ends. I ended up getting stuck with both at different points. With LeafletJS, I was unable to get they're official tutorial working, so I dropped it. As stated earlier, I was unable to get D3 to show each individual NPU a different color, which makes the visualization pretty useless.
