import { ArrowLeft, ArrowRight, Eye} from "lucide-react";
import Layout from "./Layout";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Device = () => {
  const [active, setActive] = useState(0);
  const location = useLocation();
  const totalDevice = 400;
  const limit = 12;
  const noOfPagination = Math.round(totalDevice / limit);
  const device = [
    {
      id: 1,
      name: "Device 1",
      warrantyDate: "2022-01-01",
      purchaseDate: "2022-01-01",
      status: "Active",
    },
    {
      id: 2,
      name: "Device 2",
      warrantyDate: "2022-01-01",
      purchaseDate: "2022-01-01",
      status: "Active",
    },
    {
      id: 3,
      name: "Device 3",
      warrantyDate: "2022-01-01",
      purchaseDate: "2022-01-01",
      status: "Active",
    }

  ];

  return (
    <Layout>
      <div className="space-y-6 ">
        <div className="flex items-end justify-between">
        <div></div>
          <Link to="/dashboard" className="text-lg font-medium capitalize">
            {location.pathname.slice(1)}
          </Link>

        </div>

        <table className="w-full ">
          <caption className="py-4 text-3xl font-bold bg-white rounded-t-md ">
           Device
          </caption>
          <thead>
            <tr className="text-white bg-emerald-500">
              <th className="py-3 pl-3 ">ID</th>
              <th>Device Name</th>
              <th>Warranty date</th>
              <th>Purchase Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {device.map((item, index) => (
              <tr
                className={` bg-white text-center ${
                  index % 2 === 0 ? "bg-white" : "bg-gray-100"
                }`}
                key={item.id}
              >
                <td className="py-3 pl-3 ">{item.id}</td>
                <td>{item.name}</td>
                <td>{item.warrantyDate}</td>
                <td>{item.purchaseDate}</td>
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

export default Device;
