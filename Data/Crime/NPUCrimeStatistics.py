import pandas as pd
import re

df = pd.read_csv('CrimeByYear.csv');
df = df.groupby(['year', 'npu']).size();

#regex = r"[A-Z]";
#df = df[str(df[1]) in regex];
#df.filter(regex=r'[A-Z];', axis=df[1]);

df = df.to_frame();

#pattern = re.compile("^[A-Z]");

#for index, row in df.iterrows():
#  if( not pattern.match( row['npu'] ) ):
#    df.drop(index, inplace=True);
df = df.reset_index();

#seriesBool = df['npu'].str.match('^[A-Z]', as_indexer=True);

#for index in seriesBool:
#  if(seriesBool.loc(index)):
#    print(seriesBool.loc(index));
#    df.drop(df.index[index]);

print seriesBool;

df = df[df.npu.str.len() == 1];

#df = df[pattern.match(df.npu.str)];

#print list(df.index.values);
print df;

df.to_csv('NPUCrimeStatistics.csv');
