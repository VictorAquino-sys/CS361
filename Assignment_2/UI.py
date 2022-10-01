import time
from tkinter import *
from tkinter import ttk
from PIL import Image, ImageTk

def click():
    print("You clicked the button!")
    prng = open("prng-service.txt", 'w', encoding="utf-8")
    prng.write('run')
    prng.close()

if __name__ == '__main__':

    while True:
        #Create an instance of tkinter fram or window
        window = Tk()
        #Graphical UI title
        window.title('Assignment_2')
        #Set the geometry of tkinter frame
        window.geometry("750x350")
        #Create a label widget
        label= Label(text = "Press Button to Display Image", font=("Arial 20 bold"))
        label.pack()
        button = Button(text="GENERATE NUMBER", font=("Comic Sans", 30), fg="#00FF00", command=click).pack(side=TOP)
        #Automatically close the window after 3 seconds
        window.after(5000,lambda:window.destroy())
        window.mainloop()
        # window.destroy()
        break

    while True: 
        time.sleep(2.0)
        #UI read prng-service.txt  to get the pseudo-random number
        f = open("prng-service.txt", "r")
        line = f.readline()
        f.close()

        if not line:
            continue

        if line:
            f = open("image-service.txt","w")
            f.write(line)
            f.close()
            break
    
    while True:
        time.sleep(2.0)
        #Display image
        f = open("image-service.txt", "r")
        line = f.readline()

        if line[-1] == "g":
            window = Tk()
            img = Image.open(line)
            photo = ImageTk.PhotoImage(img)
            Label(window,image=photo).pack()
            print("Displaying photo... ")
            window.mainloop()
            window.destroy()
            break

