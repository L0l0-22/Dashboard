import { FaStar } from "react-icons/fa";
import boy1 from "../../assets/boy1.jpg";
import boy2 from "../../assets/boy2.jpg";
import boy3 from "../../assets/boy3.jpg";
import girl1 from "../../assets/girl1.jpg";
import girl2 from "../../assets/girl2.jpg";
import girl3 from "../../assets/girl3.jpg";

const reviews = [
  {
    id: 1,
    student: "Ahmed Khaled",
    course: "Web Development",
    comment: "Great course! The instructor explained the concepts very clearly.",
    avatar: boy1,
    rating: 4,
    date: "June 14, 2025",
  },
  {
    id: 2,
    student: "Mona Adel",
    course: "Data Science Foundations",
    comment: "The course was very informative and well-structured.",
    avatar: girl2,
    rating: 5,
    date: "June 12, 2025",
  },
  {
    id: 3,
    student: "Omar Hossam",
    course: "Machine Learning",
    comment: "The class was very engaging and hands-on!",
    avatar: boy2,
    rating: 3,
    date: "June 10, 2025",
  },
  {
    id: 4,
    student: "Salma Nour",
    course: "Graphic Design Basics",
    comment: "The assignments helped me apply what I learned.",
    avatar: girl1,
    rating: 5,
    date: "June 9, 2025",
  },
  {
    id: 5,
    student: "Youssef Amr",
    course: "Cybersecurity Essentials",
    comment: "Clear explanations and great real-world examples.",
    avatar: boy3,
    rating: 4,
    date: "June 7, 2025",
  },
  {
    id: 6,
    student: "Laila Tarek",
    course: "UI/UX Design",
    comment: "Very creative course! I learned new design techniques.",
    avatar: girl3,
    rating: 5,
    date: "June 5, 2025",
  },
];

export default function Reviews() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Reviews</h2>
      <div className="space-y-6">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white border rounded-xl p-5 shadow-sm hover:shadow-md transition-all"
          >
            <div className="flex items-center gap-4 mb-3">
              <img
                src={review.avatar}
                alt={review.student}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <p className="text-lg font-semibold text-gray-800">{review.student}</p>
                <p className="text-sm text-gray-500">{review.course} • {review.date}</p>
              </div>
            </div>

            <div className="flex items-center gap-1 mb-2 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className={i < review.rating ? "fill-current" : "text-gray-300"} />
              ))}
            </div>

            <p className="text-gray-700">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
