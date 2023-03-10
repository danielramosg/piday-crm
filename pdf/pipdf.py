####################
# PI PRINTOUT
# Generate a pdf (or set of pdfs) with the digits of Pi.
# Author: Daniel Ramos
# License: MIT
####################

from reportlab.pdfgen import canvas
from reportlab.lib.units import cm
from reportlab.lib.pagesizes import A4, landscape
from reportlab.pdfbase.pdfmetrics import stringWidth
from math import ceil
from datetime import timedelta

####################  CONFIGURATION OPTIONS ####################

TARGET_DIGITS = 100000 # Number of decimal digits to be printed at least (excluding the "3."). 
# The actual number of digits is rounded up to fill all the pages and lines.
DIGITS_PER_LINE = 120 
LINES_PER_PAGE = 4 # Each line is a "piece" of paper.
PAGES_PER_STACK = 20 # Adjust to the max you can cut on your guillotine. Use 1 for no stacking.
LOGO_PERIOD = 4 # The logo appears once every LOGO_PERIOD pieces.

CUT_LEFT_MARGIN = 1.5 * cm # Distance from left edge of paper to the beginning of digits string, to be cut (except for first line).
NONPRINT_MARGIN = 0.5 * cm # Distance from the edge of the paper that the printer can't print on.
POINT_SIZE = 10
LINE_POSITION = 2.8 * cm # Distance from top of the band to baseline.

MODE = 'multi' # 'single' to generate one pdf, 'multi' to generate one pdf per stack.
# You can generate a single pdf with multiple stacks, but you'll have to separate stacks manually after printing.
TIME_PER_PIECE = 25 # Estimated time to glue one piece to the next one, in seconds.

DIGITS_URL = "digits/pi1000000.txt" # File with enough digits of pi.

PRINTED_URL = "http://piday.crm.cat"
QR_URL = './images/qr-url.png'

####################  END OF CONFIGURATION OPTIONS ####################

## Compute derived parameters

DIGITS_PER_STACK = DIGITS_PER_LINE * LINES_PER_PAGE * PAGES_PER_STACK
STACKS = ceil(TARGET_DIGITS / DIGITS_PER_STACK) # we will fill also the last stack
PIECES = STACKS * PAGES_PER_STACK * LINES_PER_PAGE
ACTUAL_DIGITS = STACKS * PAGES_PER_STACK * LINES_PER_PAGE * DIGITS_PER_LINE

wchar = stringWidth("0", "Courier", POINT_SIZE)
hchar = POINT_SIZE
small_wchar = stringWidth("0","Courier",POINT_SIZE-2)

## Print information
print("\nRequested digits: %d" % (TARGET_DIGITS))

if (MODE=='single'):
    print("Created one pdf file containing %d decimal digits of pi." % (ACTUAL_DIGITS))
    print("The pdf has %d pages." % (STACKS * PAGES_PER_STACK))

if (MODE=='multi'):
    print("Created multiple pdf files containing %d decimal digits of pi." % (ACTUAL_DIGITS))
    print("There are %d pdf files, each one with %d pages." % (STACKS, PAGES_PER_STACK))

print("\nThe requested %d digits will occupy %.2f meters when printed, cut, and glued." % (TARGET_DIGITS, TARGET_DIGITS*wchar/cm/100))    
print("These are in %d pieces to glue. Assuming %d seconds per piece, it will take %s to glue them all.\n" % (ceil(TARGET_DIGITS/DIGITS_PER_LINE), TIME_PER_PIECE, str(timedelta(seconds=ceil(TARGET_DIGITS/DIGITS_PER_LINE)*TIME_PER_PIECE))))

print("All the %d digits will occupy %.2f meters when printed, cut, and glued." % (ACTUAL_DIGITS, ACTUAL_DIGITS*wchar/cm/100))
print("In total there are %d pieces to glue. Assuming %d seconds per piece, it will take %s to glue them all.\n" % (PIECES, TIME_PER_PIECE, str(timedelta(seconds=PIECES*TIME_PER_PIECE))))

page_width, page_height = landscape(A4)

file = open(DIGITS_URL,"rt")

band_height = page_height/LINES_PER_PAGE

# Recall: Origin of coordinates is lower left corner, positive axis rightwards and upwards.

## Auxiliary functions

def makeStartLine():
    '''Write "3." in front of the first line'''
    h = page_height
    tick_pos = CUT_LEFT_MARGIN-0.5*wchar
    cnv.drawString(CUT_LEFT_MARGIN-2*wchar, h - LINE_POSITION, "3.")
    # cnv.line(tick_pos, h-2.1*cm , tick_pos, h - 2.4*cm - 6*small_wchar  ) # downwards
    cnv.line(tick_pos, h - LINE_POSITION + hchar - 0.04*cm, tick_pos , h -LINE_POSITION +hchar + 6*small_wchar + 0.3*cm ) # upwards
    tick_text = cnv.beginText()
    # tick_text.setTextTransform(0,-1,1,0,tick_pos+0.1*cm, h-2.2*cm) # downwards
    tick_text.setTextTransform(0,1,-1,0,tick_pos-0.1*cm, h-LINE_POSITION + hchar + 0.1*cm) # upwards
    cnv.setFont("Courier",POINT_SIZE-2)
    tick_text.textLine("0")
    cnv.drawText(tick_text)
    cnv.setFont("Courier",POINT_SIZE)


def makeLine(start_digit, page_position):
    file.seek(start_digit + 1)
    s = file.read(DIGITS_PER_LINE)
    h = page_height - page_position*band_height

    if(page_position): # band crop marks
        cnv.line(NONPRINT_MARGIN,h,CUT_LEFT_MARGIN + 10,h)
        cnv.line(page_width-NONPRINT_MARGIN,h,page_width-(NONPRINT_MARGIN +20),h)

    cnv.setFont("Courier",POINT_SIZE)
    cnv.drawString(CUT_LEFT_MARGIN, h - LINE_POSITION, s)

    # Ticks
    cnv.setFont("Courier",POINT_SIZE-2)
    for d in range(start_digit, start_digit + DIGITS_PER_LINE):
        t = d - start_digit
        if (d%10 == 0):
            tick_pos = CUT_LEFT_MARGIN +wchar*(0.5 + t)
            # cnv.line(tick_pos, h-2.1*cm , tick_pos, h - 2.4*cm - 6*small_wchar  )
            cnv.line(tick_pos, h - LINE_POSITION + hchar - 0.04*cm, tick_pos , h -LINE_POSITION +hchar + 6*small_wchar + 0.3*cm ) # upwards
            tick_text = cnv.beginText()
            # tick_text.setTextTransform(0,-1,1,0,tick_pos+0.1*cm, h-2.2*cm)
            tick_text.setTextTransform(0,1,-1,0,tick_pos-0.1*cm, h-LINE_POSITION + hchar + 0.1*cm) # upwards
            tick_text.textLine(f"{d:,}".replace(',',' '))
            cnv.drawText(tick_text)


## Main program

if (MODE == 'single'):
    cnv = canvas.Canvas("pi.pdf", pagesize=landscape(A4)) # FOR ONE FILE

for s in range (STACKS):
    if (MODE == 'multi'):
        cnv = canvas.Canvas("pi-stack-"+str(s)+".pdf", pagesize=landscape(A4)) # FOR MULTI FILES

    cnv.setFont("Courier",POINT_SIZE)

    for p in range(PAGES_PER_STACK):
        # vertical crop lines
        cnv.setLineWidth(.3)
        cnv.line(CUT_LEFT_MARGIN , NONPRINT_MARGIN , CUT_LEFT_MARGIN , NONPRINT_MARGIN + 20 )
        if(p or s):
            cnv.line(CUT_LEFT_MARGIN , page_height - NONPRINT_MARGIN , CUT_LEFT_MARGIN , page_height-(NONPRINT_MARGIN +20) )
        else: #first page, first line
            cnv.line(CUT_LEFT_MARGIN , page_height-band_height, CUT_LEFT_MARGIN , page_height-band_height-20 )
            makeStartLine() # just the "3."

        for l in range(LINES_PER_PAGE):
            D = s * DIGITS_PER_STACK + (l * PAGES_PER_STACK + p) * DIGITS_PER_LINE + 1
            makeLine(D,l)
            
            # logos
            if (int((D-1)/DIGITS_PER_LINE) % LOGO_PERIOD == 0):
                cnv.drawImage("images/crm_logo_bw.jpg", CUT_LEFT_MARGIN+10,l*band_height + NONPRINT_MARGIN ,height=1.2*cm,width=1.2*1371/488*cm)
                cnv.drawImage(QR_URL, CUT_LEFT_MARGIN+10 + 1.2*1371/488*cm +1*cm,l*band_height + NONPRINT_MARGIN,height=1.2*cm,width=1.2*cm)
                cnv.setFont("Courier",POINT_SIZE)
                cnv.drawString(CUT_LEFT_MARGIN+10 + 1.2*1371/488*cm +1*cm +1.2*cm + 1*cm , l*band_height + NONPRINT_MARGIN + hchar, PRINTED_URL)

        cnv.showPage()

    if (MODE == 'multi'):
        cnv.save() # FOR MULTI FILES

if (MODE == 'single'):
    cnv.save() # FOR ONE FILE
