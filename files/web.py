import asyncio
import websockets
import socket
import os
import time
import pyautogui

async def chat(websocket, path):
    while(True):
    	msg = await websocket.recv()
    	if "X: " in msg:
    	    msg.replace("X: ","")
    	    pyautogui.dragRel( msg, 0, duration = 0.001)
    	elif "Y: " in msg:
    	    msg.replace("Y: ","")
    	    pyautogui.dragRel( 0, msg, duration = 0.001)
    	elif "Key: " in msg:
    	    pyautogui.press(msg)
    	else:
    	    os.system(msg)
    	    
    	
    	    

asyncio.get_event_loop().run_until_complete((websockets.serve(chat, "arduino-usb.github.io" , 1234)))
asyncio.get_event_loop().run_forever()
