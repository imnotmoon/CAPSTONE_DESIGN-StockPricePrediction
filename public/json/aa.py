import os

file_oldname = os.listdir("./")
print(len(file_oldname))

for name in file_oldname:
	try: 
		os.rename(name, name.split('_')[1])
	except:
		pass

