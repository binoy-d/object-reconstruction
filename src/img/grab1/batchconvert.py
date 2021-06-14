import os
import subprocess

directory = r'./frame_c1'
for filename in os.listdir(directory):
    if filename.endswith(".png"):
        fname = os.path.join(directory, filename)
        subprocess.run(f"magick {fname} -resize 50% ./frame_c1_new/{filename[:-4]}.jpg", shell=True)
    else:
        continue
