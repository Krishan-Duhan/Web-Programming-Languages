# Web-Programming-Languages
Web programming exercises as part of CS-6314

******************* Assignment1/HW1 *************************

CS 6314.001/002 - Assignment 1
Due Date: September 12, 2019, 11:59 PM

Create your personal homepage
Create your personal homepage  (file should be named index.html) and upload it to utdallas.edu. Instructions for uploading process are provided below.
The web page should contain legitimate information about you (background information, hobbies, interests etc.) and should not contain any HTML code that is generated by a web design tool (Dreamweaver etc.)
1. In your page’s HTML, make sure to include following elements:
	<img> : On your home page include your profile picture and float it to the left. (in the middle part where you see Welcome heading)
	<meta> for description of your web page
	<meta> for the keywords associated with your page
	favorites icon ("favicon")

2. Use Bootstrap for creating the layout given in below picture.  In the header section, you will have menu items Home, About, Projects and Contact. (You can omit Logo and Login) 
 
3. For style of your page, use an external css file (filename: index.css) and define your style sheet rules within that file.
4. Links on the top menu should take the user to the corresponding section within the same page. Links on the left can be to external websites.
5. You can have any content on the right panel.

NOTES:
1. You can use colors of your choice for your home page.  For different color schemes, check following link: https://www.canva.com/learn/website-color-schemes/
2. Your page will not be tested on Microsoft Internet Explorer or other browsers that do not comply with the web standards. It will be only tested on latest versions of Google Chrome.
3. For full credit, your pages must pass the W3C HTML validator with no errors (a green bar). Choose appropriate HTML tags to match the structure of the content on the page. Do not express style information in HTML with inline styles or presentational HTML tags such as b or font.
Use following site for validation of your pages:
http://validator.w3.org/ (for HTML)


********************* Assignment2/HW2 ********************

CS 6314.001/002 – Assignment 2

Due Date: September 29, 2019

This project will build a photo gallery using jQuery for your travel photo sharing site as shown in following picture.
Requirements

When the document is loaded, you will make an AJAX call, download the data.json file (it contains an array of image objects) and display images on your html page. When the user hovers over the image, show the larger version of the image along with the caption. See instructions for details.

Instructions

1.	Examine HW2.html in the browser and then editor. You have been supplied with the appropriate CSS (the relevant classes are in gallery.css), html, and JavaScript data files (data.json which contains the data in an easy-to-read format). The images are supplied in two folders: images/square (for the gallery) and images/medium (for the popup).
2.	Loop through the images array and using the appropriate jQuery DOM methods, add the appropriate <img> tags to the supplied <ul class=“gallery”> element. The image filenames are contained in the path property of each image object. Set the alt attribute of each <img>to the title property of the image object.
3.	Use jQuery to attach handlers for the mouseenter, mouseleave, and mousemove events of the square images in the gallery.
4.	For the mouseenter event, use jQuery to add the “gray” class to the square <img> under the mouse. If you examine that class, you will see it sets the filter property to grayscale(). Hint: remember that $(this) within an event handler references the DOM object that generated the event.
5.	Also for the mouseenter event, use jQuery to generate a <div> with an id=“preview” (the styling for #preview is already defined in gallery.css). Within that <div> add an <img> element that displays the larger version of the image. Underneath that <img> add a <p>element for the caption (image title, city and date taken). The alt attribute of the square image under the mouse contains the image title. 

6.	You will need to use jQuery to set the left and top CSS properties for the #preview<div>. You can retrieve the x, y coordinates (via the pageX and pageY properties) of the current mouse position from the event object that is passed to your event handler. You can calculate the new position by offsetting by some amount from the mouse x, y position.
7.	Finally, once the #preview <div> is constructed, simply append it to the <body>.
8.	For the mouseleave event, remove the “gray” class from the square image under the mouse. Also remove the #preview<div> from the body.
9.	For the mousemove event, simply set the left and top CSS properties for the #preview <div> using the same approach as described in step 6.

Testing

1.	Verify the code works when mousing over the images. Be sure that the caption is displaying the correct information.
2.	Don't worry if the pop-up image is “off screen” when mousing over images on the edges of the browser.


********************* Assignment3/HW3 ********************
Every 10 years, the Social Security Administration provides data about the 1000 most popular boy and girl names for children born in the US for each gender at http://www.ssa.gov/OACT/babynames/
http://www.ssa.gov/OACT/babynames/top5names.html

Your task for this assignment is to display the baby names and their popularity rankings for a given year and gender. You will implement the project using AJAX technology, PHP and MySQL.
On your html page (babynames.html), you will have one division element for results, two drop-down lists (for year and gender) and one button.  Initially, you will not show any results. Once clicked on the button, you will call Ajax function, which will ultimately make a request for babynames.php on the server.
In babynames.php, you will connect to the database and fetch the top-five popular names for the selected year and gender.  The default option for the year and gender is “All years” and “Both”. 
The results will be passed to the client and will be used to dynamically change the contents of the division on the html page. Along with each baby name, you will also list the popularity ranking, gender and the year. 

For database part, you will create a table with following schema:
Database name: HW3
BabyNames (name, year, ranking, gender) 
For gender values, use ‘m’ and ‘f’.
You can use attached sql file to insert records into your table.
