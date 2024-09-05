import React, { useState } from 'react';
import meal1 from "../assets/meal1.png";
import meal2 from "../assets/meal2.png";
import meal3 from "../assets/meal3.png";
import meal4 from "../assets/meal4.png";
import meal5 from "../assets/meal5.png";
import meal6 from "../assets/meal6.png";
import { ArticleCard } from './ArticleCard';
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";

const articles = [
  [
    {
      key: "1",
      img: meal1,
      header: "Grilled Tomatoes at Home",
      desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
    },
    {
      key: "2",
      img: meal2,
      header: "Snacks for Travel",
      desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
    },
    {
      key: "3",
      img: meal3,
      header: "Post-Workout Recipes",
      desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
    }
  ],
  [
    {
      key: "4",
      img: meal4,
      header: "How To Grill Corn",
      desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
    },
    {
      key: "5",
      img: meal5,
      header: "Crunchwrap Supreme",
      desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
    },
    {
      key: "6",
      img: meal6,
      header: "Broccoli Cheese Soup",
      desc: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
    }
  ]
]

export const ArticleContainer = () => {
  const [page, setPage] = useState(0)
  const currentArticles = articles[page].map(art => (
    <ArticleCard key={art.key} img={art.img} header={art.header} desc={art.desc} />
  ))

  const handlePageChange = (newPage) => {
    setPage(newPage)
  }

  return (
    <section className="w-10/12 mx-auto">
      <h2 className="font-source text-4xl lg:text-5xl font-semibold tracking-wide">
        Latest Articles
      </h2>
      <div className="flex flex-col lg:flex-row flex-wrap justify-between mt-20 gap-16 lg:gap-0">
        {currentArticles}
      </div>
      <div className="flex items-center gap-2 my-20 justify-center">
        <AiOutlineLeft
          className={`border ${page === 1 ? 'text-azureBlue border-azureBlue' : 'text-gray-400 border-gray-400'} h-6 w-6 rounded-md cursor-pointer`}
          onClick={() => handlePageChange(0)}
        />
        <span>{page === 1 ? '2/2' : '1/2'}</span>
        <AiOutlineRight
          className={`border ${page === 0 ? 'text-azureBlue border-azureBlue' : 'text-gray-400 border-gray-400'} h-6 w-6 rounded-md cursor-pointer`}
          onClick={() => handlePageChange(1)}
        />
      </div>
    </section>
  )
}
