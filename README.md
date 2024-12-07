# InstaList
---
## Project Description:

InstaList is developed with the goal of aiding grocery store shoppers in their organization. Users are able to use our website to browse recipes which they can then directly add to their shopping list. Not only will the list of ingredients be added to the list, but they will be divided into sub-categories based around the most common grocery store organzation techniques. With this is mind, our users will see quicker trips to the grocery store as they will spend less time doubling back through aisles they have already been through. The year over year roadmap of InstaList will be published in early 2023 and we are excited about progressing this software in the future.
![Home](https://github.com/user-attachments/assets/b48f054a-dcab-4c3f-9a25-d88517d39343)


## Website Features:

- Create an account with a valid email address and password
- Select your own profile picture from a variety of options
- Update dietary restrictions in your profile
- Browse from a catalog of over 2 million recipes,  supplied from the Edamam API
- Choose any recipe to store in your recipe list, which will generate a comprehensive grocery list at the press of a button


## Application Architecture: 

![map](https://github.com/user-attachments/assets/4d866e4c-36ad-48b1-a7c6-d5ba567eacdd)

![map2](https://github.com/user-attachments/assets/72cd5c25-f224-4898-b52c-34d245a06c28)

 **Backend:**
  - SQL Database
  - Edamam.com API
  
 **Front-End:**
  - HTML, CSS and JS for user input and UI design
  - MVC (to to divide the information and create functions that allow for more accurate relationships to the databases)
    
**Communication:**
  - Model is responsible for managing the application. It receives user input from the controller. This will be an incorporation of HTML and the databases, as the users will insert their data, which will be directly inserted into the correlating database.
  - View renders presentation of the model in a particular format. Specifically, we will use HTML to create an aesthetically pleasing visual for the UI.
  - Controller responds to the user input and performs interactions on the data model objects by validating them. This will specifically be associated with the database, as the different user inputs will trigger different corresponding values within the database


## Technologies/Tools:
![pic1](https://github.com/user-attachments/assets/8a8fcded-7ed9-4829-acd6-0e39acfc96cd)
![pic2](https://github.com/user-attachments/assets/a2473c32-89b9-4ed3-8912-eb4d41b94a51)
![pic3](https://github.com/user-attachments/assets/88da1daa-f6b9-4c31-8a72-dea110040a05)
- Visual Studio Code
- PostgresSQL
- MySQL
- Notion
- Docker
- LocalHost
- Illustrator
- Photoshop
- Lucid Charts
- Edamam
- Node.js
