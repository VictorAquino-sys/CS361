import time

if __name__ == '__main__':

    while True:
        time.sleep(2.0)
        
        f = open("prng-service.txt", "r")
        line = f.readline()
        f.close()

        if not line:
            continue

        try:
            value = int(line)
        except:
            line = ""

        if line:
            if (int(line) >= 6):
                imgnum = (int(line) % 5) + 1
                f = open("image-service.txt","w")
                f.write(f"./imgs/{imgnum}.jpg")
                f.close()
