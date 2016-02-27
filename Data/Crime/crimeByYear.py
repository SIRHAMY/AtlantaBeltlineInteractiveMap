from datetime import datetime
import csv
import pandas as pd

print("Initializing CSV Read...");

#data = csv.reader(open('crime.csv'));

#with open('crime.csv', 'r'), open('crimeByYear.csv', 'w') as fin, fout:
#    writer = csv.writer(fout, delimeter=',');
#    for row in csv.reader(fin, delimeter=','):

df = pd.read_csv('crime.csv');
df['occur_date'] = pd.to_datetime(df['occur_date']);
df['year'] = df['occur_date'].dt.year;
df.to_csv('CrimeByYear.csv');
