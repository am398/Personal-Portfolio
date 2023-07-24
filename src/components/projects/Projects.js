import React from 'react'
import Title from '../layouts/Title'
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
      <ProjectsCard
          title="E-commerce Website"
          des="A Digital platform that allows businesses and individuals to buy 
          and sell products or services over the internet.
          Key Features:
          Product Listings, Search and Filters,User Accounts, Shopping Cart, 
          Checkout and Payment,Reviews and Ratings."
          src={"https://w3layouts.com/wp-content/uploads/2021/06/Electronics-Mart-eCommerce-website-template-1-scaled.jpg"}
          GitHublink={"https://github.com/am398/Ecommerce-App"}
        />
        <ProjectsCard
          title="Personal Portfolio"
          des="A curated collection of My work, accomplishments, skills,experiences and Educational Qualifications"
          src={"https://speckyboy.com/wp-content/uploads/2022/07/personal-portfolio-designer-web-design-inspiration-16.jpg"}
          GitHublink="https://github.com/am398/To-Do-List"
        />
        
        <ProjectsCard
          title="Weather Web App Using API"
          des="Fetching the real-time weather data from a weather API and displaying it on the
              Users Screen"
          src={"https://uizard.io/static/9e9f1bfeac21afca096f9e286390cc6e/d9bdf/weather-web-dark-home.png"}
          GitHublink="https://github.com/am398/Weather-App_Using-API"
        />
        <ProjectsCard
          title="Tour Management"
          des="Using linked lists data structure, developed a program in C that provides a
          facility to organize lists containing name of individual/group leader,
          number of tourists in the group, for a specified date and for a specified
          destination"
          src={"https://www.flightslogic.com/public/images/contents/tourism-management-system1.jpg"}
          GitHublink="https://github.com/am398/Tour-Management"
        />
        <ProjectsCard
          title="ToDO List"
          des="A simple and effective tool to organize tasks and manage daily or long-term activities.
           Tasks can be added that need to be completed or accomplished within a specific timeframe"
          src={"https://1.bp.blogspot.com/-i78iKr_P9Pk/X9ohjXyc5eI/AAAAAAAAA_4/8UauxZaOgUshGK7MXwW1gZqts7Zrf_AewCLcBGAsYHQ/s1280/Todo%2BList%2BApp%2Busing%2BHTML%2BCSS%2B%2526%2BJavaScript.webp"}
          GitHublink="https://github.com/am398/To-Do-List"
        />
        <ProjectsCard
          title="Drum Kit"
          des="Playing Drums sound using the keys on keyboard as well as using the buttons
          on the Screen"
          src={"https://code-projects.org/wp-content/uploads/2020/12/dk.png"}
          GitHublink="https://github.com/am398/Drum-Kit"
        />
      </div>
    </section>
  );
}

export default Projects