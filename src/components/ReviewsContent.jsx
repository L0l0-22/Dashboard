import { useState } from "react";
import stars from "../assets/Vector.svg";
import writereview from "../assets/writereview.png";
import reviewpic from "../assets/Rectangle 30187.png";
import { IoMdClose } from "react-icons/io";
import { BsCheck2Circle } from "react-icons/bs";
import { GoHeartFill } from "react-icons/go";
import { LuUserSearch } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function ReviewsContent() {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState("All");
  const [model2, setModel2] = useState(false);
  const [rating, setRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [reviewText, setReviewText] = useState("");
  const toggleModel2 = () => setModel2(!model2);
  const handleClick = (index) => setRating(index + 1);

  const reviews = [
    {
      id: 1,
      name: "Shady Abdo",
      rating: 5,
      title: "Excellent Course!",
      text: "Thorough explanations with real-world UX case studies. Highly recommend!",
      imgSrc: reviewpic,
    },
    {
      id: 2,
      name: "John Doe",
      rating: 4,
      title: "Very Helpful",
      text: "Covers accessibility and testing tools well. Could use more design examples.",
      imgSrc: reviewpic,
    },
    {
      id: 3,
      name: "Jane Smith",
      rating: 3,
      title: "Good Introduction",
      text: "Good for beginners. A few topics felt rushed but overall okay.",
      imgSrc: reviewpic,
    },
    {
      id: 4,
      name: "Mark Taylor",
      rating: 2,
      title: "Needs Improvement",
      text: "Lacks advanced testing methods and practical exercises.",
      imgSrc: reviewpic,
    },
  ];

  const filteredReviews =
    activeFilter === "All"
      ? reviews
      : reviews.filter((review) => review.rating === parseInt(activeFilter));

  const ratingCounts = [5, 4, 3, 2, 1].map((r) => ({
    rating: r,
    count: reviews.filter((rev) => rev.rating === r).length,
  }));

  const totalReviews = reviews.length;

  const handleSubmitReview = () => {
    if (!reviewText.trim()) return;

    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setModel2(false);
      setReviewText("");
      setRating(0);
    }, 2000);
  };

  return (
    <div id="content3" className="flex flex-col md:flex-row">
      <div className="flex flex-col my-8 md:pr-8 w-full md:w-[30%] h-fit">
        <div className="mb-3">
          <div className="flex flex-col gap-8">
            <div className="px-2 py-1 rounded">
              <span className="text-redS text-4xl font-bold bg-gray-50 shadow-lg p-3 rounded">4.7</span>
            </div>
            <div>
              <div className="stars flex gap-1">
                {[...Array(5)].map((_, idx) => (
                  <img src={stars} alt="star" key={idx} />
                ))}
              </div>
              <p className="card111-text text-sm text-gray-600 mt-1">
                {t("reviews.based_on", { count: totalReviews })}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 mt-2">
          {ratingCounts.map((item, index) => {
            const percentage = Math.round((item.count / totalReviews) * 100) || 0;
            if (item.count === 0) return null;
            return (
              <div className="review-bar flex items-center mb-2 w-full" key={index}>
                <span className="mr-2 font-medium">{item.rating}</span>
                <img src={stars} alt="star" className="w-5 h-5" />
                <div className="bar bg-gray-200 h-3 rounded mx-2 w-full overflow-hidden">
                  <div
                    className="bg-yellow-500 h-full transition-all duration-300"
                    style={{ width: `${percentage}%`, minWidth: percentage > 0 ? '2px' : '0' }}
                  ></div>
                </div>
                <div className="text-sm text-gray-600 font-medium text-right">{percentage}%</div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 space-y-4 text-sm text-gray-700 max-w-[26rem]">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <LuUserSearch className="text-redS bg-gray-100 rounded-full p-2" size={36} />
              <p className="font-semibold text-gray-800 text-lg">{t("reviews.how_to.title")}</p>
            </div>
            <p>{t("reviews.how_to.desc")}</p>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-2">
              <FaRegStar className="text-redS bg-gray-100 rounded-full p-2" size={36} />
              <p className="font-semibold text-gray-800 text-lg">{t("reviews.where_from.title")}</p>
            </div>
            <p>{t("reviews.where_from.desc")}</p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-[70%]">
        <div className="review-list mb-6 rounded-lg px-4 ">
          <ul className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4 xl:gap-0">
            {["All", "5", "4", "3", "2", "1"].map((label) => (
              <li className="List-item1" key={label}>
                <button
                  className={`font-semibold ${
                    activeFilter === label ? "font-bold bg-redS text-white" : ""
                  } px-4 py-1 rounded-lg hover:bg-redS hover:text-white text-gray-600 border`}
                  onClick={() => setActiveFilter(label)}
                >
                  {label === "All"
                    ? t("reviews.filter.all")
                    : t("reviews.filter.stars", { num: label })}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div className="mb-3" id="all-review-content">
          {filteredReviews.length === 0 ? (
            <div className="text-center text-gray-500 py-4">
              {t("reviews.no_reviews")}
            </div>
          ) : (
            filteredReviews.map((review) => (
              <div className="single-review-container mt-4 p-3 sm:p-4 bg-white rounded-lg shadow-sm" key={review.id}>
                <div className="flex flex-col sm:flex-row gap-4 ">
                  <div className="flex w-full md:w-3/4 space-x-4">
                    <div className="pt-2">
                      <img
                        src={review.imgSrc}
                        className="review-img w-12 h-12 sm:w-20 sm:h-20 rounded-full object-cover"
                        alt="Review"
                      />
                    </div>
                    <div>
                      <div className="card111-body">
                        <p className="card111-text font-medium">{review.name}</p>
                        <div className="stars flex mt-1">
                          {[...Array(review.rating)].map((_, idx) => (
                            <img src={stars} key={idx} alt="star" className="w-4 h-4" />
                          ))}
                        </div>
                        <span className="font-medium text-sm sm:text-base">{review.title}</span>
                        <p className="text-sm sm:text-base mt-1 text-gray-600">{review.text}</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <button className="p-2 border border-redS text-redS flex items-center rounded-md mt-2">
                      <GoHeartFill size={20} className="mr-3" />
                      {t("reviews.like")}
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="w-full md:w-[40%] mx-auto mt-9">
          <button
            onClick={toggleModel2}
            className="w-full p-3 bg-main text-white rounded-lg hover:bg-mainHover text-lg"
          >
            {t("reviews.write_button")}
          </button>
        </div>

        {model2 && (
          <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-xl w-[90%] max-w-md relative">
              {isSubmitted ? (
                <div className="flex flex-col justify-center items-center h-60">
                  <BsCheck2Circle size={64} className="text-green-500 mb-4" />
                  <p className="text-lg font-semibold text-green-600">
                    {t("reviews.modal.success")}
                  </p>
                </div>
              ) : (
                <>
                  <div className="flex justify-center mb-4">
                    <img src={writereview} alt="Write Review" className="w-24" />
                  </div>
                  <p className="text-2xl font-semibold text-center mb-2">
                    {t("reviews.modal.title")}
                  </p>
                  <div className="flex justify-center mb-4">
                    {[...Array(5)].map((_, index) => (
                      <span
                        key={index}
                        className={`cursor-pointer text-2xl ${
                          index < rating ? "text-yellow-500" : "text-gray-300"
                        }`}
                        onClick={() => handleClick(index)}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <textarea
                    className="w-full border rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-redS"
                    rows="3"
                    placeholder={t("reviews.modal.placeholder")}
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                  />
                  <button
                    onClick={handleSubmitReview}
                    className="mt-4 w-full p-2 bg-main text-white rounded hover:bg-mainHover"
                  >
                    {t("reviews.modal.submit")}
                  </button>
                </>
              )}
              <button
                onClick={toggleModel2}
                className="absolute top-4 right-4 text-gray-500 hover:text-black"
              >
                <IoMdClose size={24} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
