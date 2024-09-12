import { ArrowLeft, ArrowRight, Eye, Plus } from "lucide-react";
import Layout from "./Layout";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Dashboard = () => {
  const [active, setActive] = useState(0);
  const location = useLocation();
  const totalDoctors = 400;
  const limit = 12;
  const noOfPagination = Math.round(totalDoctors / limit);
  const doctors = [
    {
      id: 1,
      name: "Dr. John",
      day: "Monday",
      time: "10:00 AM",
      status: "pending",
    },
    {
      id: 2,
      name: "Dr. Smith",
      day: "Tuesday",
      time: "11:00 AM",
      status: "Active",
    },
    {
      id: 3,
      name: "Dr. Smith",
      day: "Wednesday",
      time: "12:00 AM",
      status: "pending",
    },
    {
      id: 4,
      name: "Dr. Smith",
      day: "Thursday",
      time: "1:00 PM",
      status: "Active",
    },
  ];

  return (
    <Layout>
      <div className="space-y-6 ">
        <div className="flex items-center justify-between">
          <button className="flex px-2 py-2 text-white rounded-md bg-emerald-600">
            <Plus />
            Add Patient
          </button>

          <Link to="/dashboard" className="text-lg font-medium capitalize">
            {location.pathname.slice(1)}
          </Link>
        </div>

        <table className="w-full ">
          <caption className="py-4 text-3xl font-bold bg-white rounded-t-md ">
            Doctor Schedule
          </caption>
          <thead>
            <tr className="text-white bg-emerald-500">
              <th className="py-3 pl-3 text-left">ID</th>
              <th>Doctor Name</th>
              <th>WeekDay</th>
              <th>Visiting Time</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {doctors.map((item, index) => (
              <tr
                className={` bg-white text-left ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-100"
                }`}
                key={item.id}
              >
                <td className="py-3 pl-3">{item.id}</td>
                <td>{item.name}</td>
                <td>{item.day}</td>
                <td>{item.time}</td>
                <td>{item.status}</td>
                <td>
                  <button className="w-10 h-10 text-center">
                    <Eye />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>

          <tfoot>
            <tr className="bg-white">
              <td className="py-3 pl-3 text-gray-600">
                Showing 1 to 10 of 14 entries
              </td>
              <td colSpan={5} align="right" className="pr-6">
                <div className="space-x-2">
                  <button>
                    <ArrowLeft />
                  </button>

                  {Array(noOfPagination)
                    .fill("zohaib")
                    .slice(0, 10)
                    .map((item, index) => (
                      <button
                        onClick={() => setActive(index)}
                        className={`px-3 py-2  border rounded ${
                          active === index ? "bg-emerald-500" : "bg-white"
                        }`}
                        key={index}
                      >
                        {index + 1}
                      </button>
                    ))}

                  <button>
                    <ArrowRight />
                  </button>
                </div>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </Layout>
  );
};

export default Dashboard;
