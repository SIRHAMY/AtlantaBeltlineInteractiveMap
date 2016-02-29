import pandas as pd;

df = pd.read_csv('NPUCrimeStatistics.csv');

result = pd.DataFrame(columns=['year', 'NPU', 'change']);

print df.size;

for i in range(26, df.year.count()):
    #print('did something');
    result.loc[i] = [df.loc[i, 'year'], df.loc[i, 'npu'], df.loc[i, '0'] - df.loc[i - 25, '0']];

print result;

result.to_csv('NPUCrimeChange.csv');
