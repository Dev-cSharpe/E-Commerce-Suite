import os
_src = r"/Users/mukeshkudi/Desktop/data/First_project_FromScratch/Product_img/"
_ext = ".jpg"
for i,filename in enumerate(os.listdir(_src)):
    if filename.endswith(_ext):
        os.rename(_src+filename,_src+str(i+38)+_ext)