import random
import time

if __name__ == '__main__':

    # A loop is created to run the processes(files) and will terminate the loop when the executed data is displayed in the UI
    while True:
        time.sleep(2.0)
        run = open("prng-service.txt", 'r', encoding="utf-8")
        line = run.readline()
        run.close()

        #if line is empty
        if not line:
            continue

        if line == "run":
            print("Generating random number... ")

            f = open("prng-service.txt", 'w', encoding="utf-8")
            f.write(f"{random.randint(1,100)}")
            f.close()



        