from asyncio.windows_events import NULL
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
        #Set the geometry of tkinter frame
        window.geometry("750x350")
        #Create a label
        label= Label(window, text = "Press Button to Display Image", font=("Arial 20 bold"))
        label.pack()
        button = Button(window, text="GENERATE NUMBER", font=("Comic Sans", 30), fg="#00FF00", command=click).pack(side=TOP)

        #Display image
        value = ""
        try:
            f = open("image-service.txt", "r")
            line = f.readline()
            value != line
        except:
            line = ""

        if line:
            img = Image.open(line)
            window.photo = ImageTk.PhotoImage(img)
     
            label.configure(image=window.photo)
            window.update()
            print("Displaying photo... ")
        window.mainloop()
        

