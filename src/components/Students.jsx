import SearchBox from "./SearchBox";
import StudentDetails from "./StudentDetails";

const Students = () => {
  return (
    <div className="py-24 lg:pt-[120px] lg:pb-28">
      <div className="container">
        <div className="mb-16 flex flex-col items-center">
          <h2 className="text-3xl lg:text-[40px] mb-9 font-bold">
            <span className="text-[#00CC8C]">Students</span> of the Year
          </h2>
          <SearchBox />
        </div>
        <div className="max-w-[848px] mx-auto overflow-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#FFFFFF0D]">
                <th className="uppercase p-5 text-sm md:text-xl font-semibold md:min-w-[110px] text-left">
                  ID
                </th>
                <th className="p-5 text-sm md:text-xl font-semibold text-left">
                  Name
                </th>
                <th className="p-5 text-sm md:text-xl font-semibold">Scores</th>
                <th className="p-5 text-sm md:text-xl font-semibold">
                  Percentage
                </th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- class one --> */}
              <tr className="bg-white/5">
                <td className="p-5 text-sm md:text-xl" colSpan="4">
                  Class One
                </td>
              </tr>
              {ClassOne.map((student) => (
                <StudentDetails key={student.id} student={student} />
              ))}

              {/* <!-- class two --> */}
              <tr className="bg-white/5">
                <td className="p-5 text-sm md:text-xl" colSpan="4">
                  Class Two
                </td>
              </tr>
              {ClassTwo.map((student) => (
                <StudentDetails key={student.id} student={student} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Students;

const ClassOne = [
  {
    id: 1,
    Name: "John Doe",
    Scores: "A+",
    Percentage: 88,
  },
  {
    id: 2,
    Name: "Jane Smith",
    Scores: "A",
    Percentage: 89,
  },
  {
    id: 3,
    Name: "Bob Johnson",
    Scores: "B+",
    Percentage: 85,
  },
  {
    id: 4,
    Name: "Alice Brown",
    Scores: "A-",
    Percentage: 78,
  },
  {
    id: 5,
    Name: "Mike Wilson",
    Scores: "B",
    Percentage: 83,
  },
  {
    id: 6,
    Name: "Sara Davis",
    Scores: "A",
    Percentage: 90,
  },
  {
    id: 7,
    Name: "Chris Taylor",
    Scores: "A-",
    Percentage: 85,
  },
  {
    id: 8,
    Name: "Emily White",
    Scores: "C+",
    Percentage: 80,
  },
  {
    id: 9,
    Name: "Alex Turner",
    Scores: "A",
    Percentage: 90,
  },
  {
    id: 10,
    Name: "Lisa Parker",
    Scores: "A-",
    Percentage: 85,
  },
];
const ClassTwo = [
  {
    id: 1,
    Name: "Ethan Smith",
    Scores: "A+",
    Percentage: 92,
  },
  {
    id: 2,
    Name: "Olivia Johnson",
    Scores: "A",
    Percentage: 94,
  },
  {
    id: 3,
    Name: "Liam Davis",
    Scores: "B+",
    Percentage: 89,
  },
  {
    id: 4,
    Name: "Ava Wilson",
    Scores: "A-",
    Percentage: 82,
  },
  {
    id: 5,
    Name: "Mason Brown",
    Scores: "B",
    Percentage: 87,
  },
  {
    id: 6,
    Name: "Sophia Miller",
    Scores: "A",
    Percentage: 96,
  },
  {
    id: 7,
    Name: "Noah Taylor",
    Scores: "A-",
    Percentage: 89,
  },
  {
    id: 8,
    Name: "Emma White",
    Scores: "C+",
    Percentage: 84,
  },
  {
    id: 9,
    Name: "Jackson Turner",
    Scores: "A",
    Percentage: 96,
  },
  {
    id: 10,
    Name: "Avery Parker",
    Scores: "A-",
    Percentage: 89,
  },
];
