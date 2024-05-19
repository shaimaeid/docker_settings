# write script to cretae new text file and add current folder path to the file content
# run the script in the container
# check the file content in the container
# check the file content in the host
# check the file permission in the host
# check the file permission in the container
# check the file owner in the host
touch /app/test.txt
echo $PWD > /app/test.txt
cat /app/test.txt
ls -l /app/test.txt
ls -l /app

