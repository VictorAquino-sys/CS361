import time

if __name__ == '__main__':

    print("Working on it... ")

    while True:
        time.sleep(3.0)
        
        f = open("image-service.txt", "r")
        line = f.readline()
        f.close()

        if not line:
            continue

        if line:
            if (int(line) >= 6):
                line = (int(line) % 5) + 1
            f = open("image-service.txt","w")
            f.write(f"./imgs/{line}.jpg")
            f.close()
            break
