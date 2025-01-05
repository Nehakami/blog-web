import React from 'react'
import BlogCard from '../components/BlogCard';
import { title } from 'process';

export default function Mega() {
  const post = [
    {
      id: '1',
      title: "HTML Block of Webdevlopment",
      description: "Explore of the HTML, the backbone of every web page.",
      date: "2024-11-15",
      imageUrl: "../images/Slide1.jpg",

    },
    {
      id: '2',
      title: "The Machine Learning Basics",
      description: "Machine learning is a branch of AI that enables systems to learn from data and make predictions or decisions without explicit programming. It powers technologies like recommendation systems, image recognition, and voice assistants.",
      date: "2024-10-08",
      imageUrl: "../images/Slide2.jpg",

    },
    {
      id: '3',
      title: "Deep Learning Explained",
      description: "Deep learning uses neural networks to extract patterns from data, enabling applications like image recognition and natural language processing.",
      date: "2024-09-12",
      imageUrl: "../images/Slide3.jpg",

    },
    {
      id: '4',
      title: " The Neural Network to Model Complex",
      description: "Neural networks model complex data by mimicking the human brain, using layers of interconnected nodes to process and learn patterns. They excel in tasks like image recognition, speech processing, and predictive analysis.",
      date: "2024-10-07",
      imageUrl: "../images/Slide4.jpg",

    },
    {
      id: '5',
      title: "The Natural Lanuage Processing",
      description: "Natural Language Processing (NLP) enables machines to understand, interpret, and generate human language. It powers applications like chatbots, translation, and sentiment analysis.",
      date: "2024-09-12",
      imageUrl: "../images/Slide5.jpg",

    },
    {
      id: '6',
      title: "The Data Processing Techniques",
      description: "Data processing techniques transform raw data into meaningful insights through steps like cleaning, transformation, and analysis. These methods enable efficient decision-making and data visualization across industries.",
      date: "2024-08-10",
      imageUrl: "../images/Slide6.jpg",

    },
    {
      id: '7',
      title: "The Building Your First Neural Network",
      description: "Building your first neural network involves designing layers of neurons to process data, learn patterns, and make predictions. It’s a foundational step in understanding deep learning and AI applications.",
      date: "2024-07-12",
      imageUrl: "../images/Slide7.jpg",

    },
    {
      id: '8',
      title: "The AI Driven Decision Network",
      description: "AI-driven decision networks analyze data and apply machine learning to automate complex decision-making processes. They enhance efficiency, accuracy, and adaptability across industries like finance and healthcare.",
      date: "2024-10-10",
      imageUrl: "../images/Slide8.jpg",

    },
    {
      id: '9',
      title: "The Web Development Trends For 2024",
      description: "Web development trends for 2024 focus on AI integration, immersive 3D visuals, and enhanced performance with technologies like WebAssembly and PWAs. These innovations prioritize user experience, scalability, and responsiveness.",
      date: "2024-10-12",
      imageUrl: "../images/Slide9.jpg",

    },
    {
      id: '10',
      title: "The Introduction to Blockchain Technology",
      description: "Blockchain technology is a decentralized, secure digital ledger system that records transactions across multiple computers, ensuring transparency and immutability.",
      date: "2024-06-09",
      imageUrl: "../images/Slide10.jpg",

    },
    {
      id: '11',
      title: "The Future of Quantum Computing",
      description: "The future of quantum computing holds the potential to solve complex problems at unprecedented speeds, revolutionizing fields like cryptography, medicine, and materials science.",
      date: "2024-09-17",
      imageUrl: "../images/Slide11.jpg",

    },
    {
      id: '12',
      title: " The Pishing Attack Malware and Rosomware",
      description: "Phishing attacks, malware, and ransomware are malicious cyber threats that steal data, infect systems, and demand ransom, often causing significant damage to individuals and organizations.",
      date: "2024-10-25",
      imageUrl: "../images/Slide12.jpg",

    },
    {
      id: '13',
      title: "The Rise of Augmented Reality",
      description: "The rise of augmented reality is transforming how we interact with the world by blending digital elements with the physical environment for immersive experiences across various industries.",
      date: "2024-11-23",
      imageUrl: "../images/Slide13.jpg",

    },
    {
      id: '14',
      title: "The Effective Communication Remote Teams",
      description: "Effective communication in remote teams relies on clear, consistent digital tools and regular check-ins to maintain collaboration, productivity, and team cohesion.",
      date: "2024-10-29",
      imageUrl: "../images/Slide14.jpg",

    },
    {
      id: '15',
      title: "The Sustainable Tech Inovation",
      description: "Sustainable tech innovation focuses on developing eco-friendly technologies that reduce environmental impact while promoting energy efficiency, renewable resources, and waste reduction.",
      date: "2024-11-18",
      imageUrl: "../images/Slide15.jpg",

    },

  ];
  return (
    <div className="my-8">
      <h1 className="text-3xl font-bold text-center my-8 text-red-600 animate-color-change"> 
        {" "}
        Exploring the world of AI and Technology
        </h1>


        <div className="grid grid-cols-1 sm:-grid-cols-2 lg:grid-cols-3 gap-8">
          {post.map((post, index) => (
            <div className="fade-in" key={post.id}>
              <div className="bolg-card">
                <BlogCard post={post} isDarkBackground={index % 2 === 0}/>
              </div>
            </div>


          ))} 

        </div>

    </div>

  )
}
