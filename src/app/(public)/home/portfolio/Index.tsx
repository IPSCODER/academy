import React from 'react'

 function PortfolioSection() {
  const projects = [
    { title: "E-Learning Platform", description: "Developed an interactive learning management system.", image: "/images/project1.jpg" },
    { title: "E-Commerce Website", description: "Built a feature-rich Shopify-based online store.", image: "/images/project2.jpg" },
    { title: "Portfolio Website", description: "Designed and developed a modern personal portfolio.", image: "/images/project3.jpg" },
  ];
  
  return (
    <section className="py-16 bg-gray-100 text-center">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold mb-6">Our Portfolio</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="p-6 flex flex-col items-center">
              {/* <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-md mb-4" /> */}
              <span className="w-8 h-8 text-gray-500" />
              <h2 className="mt-4 text-xl font-semibold">{project.title}</h2>
              <p className="text-gray-600 mt-2">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default PortfolioSection