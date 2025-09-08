# Blood-Donating-Website
Topic(idea): Finding the nearest "Blood Bank" for blood donors and receivers based on their blood group, location and urgency, so that the patient won't face any inconvenience in their treatment.

User(who can use our project for getting benefits):
1. An organization checking the availability of the required blood group by entering the details.
2. An individual user, depending upon the requirements.

Working Mechanism of the main page: 
1. The user does self login.
2. After doing self login, the Email-id and the password of the user gets updataed in the database.
3. Then the user gets introduced in the main page, where the user enters the details regarding his Name, Age, Email-id, Location, and DOB.
4. Then through javascript, all the fields gonna be checked, whether the required fields being filled out or not.
5. If all the required fields ain't filled out, then the user gonna get an error message regarding the matter.
6. Once, all the required fields are filled out, then the user gonna get a pop-up option.
7. The options shows: Receiver or Donor.
8. Once any of the above options' being clicked, accordingly that page gonna shift/move to that page.

Working Mechanism of the further chosen page:
1. If the user clicks over 'Donor' option, then depending upon the user entered details, the page gonna show a list of 'Blood Bank' centers, where they can donate and make a huge change for the society.
2. If the user clicks over 'Receiver' option, then depending upon the user entered details and urgency, the page gonna show the nearest 'Blood Bank' center through GIS(Geographic Information System) and make sure that the required blood group is already present in that 'Blood Bank'. If the required blood group ain't available, then the range of searching gonna expand and find out any of the available 'Blood Bank' where the required blood group is present.

Working Mechanism of the 'Database':
1.
