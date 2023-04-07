import filter from "../assets/icons/filter.svg";
import { PageTitle } from "../components";
import { userTypes } from "../helpers/UsersType";
import { numberFormat } from "../helpers/NumberFormatter";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineDown } from "react-icons/ai";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Users.scss";
import { AiOutlineEye } from "react-icons/ai";
import blacklist from "../assets/icons/user-times 1.svg";
import { RiUserUnfollowLine, RiUserFollowLine, RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import { endpoint } from "../helpers/ApiEndpoint";
import ApiRoutes from "../helpers/ApiRoutes";
import Loading from "../helpers/Loading";
import Error from "../helpers/Error";
interface UserType {
  id: number;
  classes: string;
  icon: string;
  userType: string;
  no_OfUsers: any;
}

interface User {
  id: number;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  createdAt: string;
}

type Status = "active" | "Blacklisted" | "pending" | "inactive";

const Users = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const [users, setUsers] = useState<User[]>([]);
  const [showFilterModal, setShowFilterModel] = useState(false);
  const [usersStatus, setUsersStatus] = useState<Status>("active");
  const [openModalIndex, setOpenModalIndex] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [totalPages, setTotalPages] = useState(0);

  const navigate = useNavigate();

  const handleClick = (id: number) => {
    navigate(`/dashboard/users/${id}`);
  };

  const handleClickModal = (index: number) => {
    setOpenModalIndex(index);
  };

  const handleStatusChange = (newStatus: Status) => {
    setUsersStatus(newStatus);
  };

  useEffect(() => {
    const getUserData = async () => {
      try {
        const { data } = await axios.get<User[]>(
          endpoint + ApiRoutes.user.users
        );
        setUsers(data);
        setIsLoading(false);
        setTotalPages(Math.ceil(users.length / itemsPerPage));
        console.log(users.length / itemsPerPage);
      } catch (err: any) {
        setIsLoading(false);
        setError(err.message);
      }
    };
    getUserData();
  }, [itemsPerPage]);

  console.log(totalPages);

  // Calculate current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = users.slice(indexOfFirstItem, indexOfLastItem);

  // Handle page click
  const handlePageChange = (pageNumber: number): void => {
    setCurrentPage(pageNumber);
  };


  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="users">
          <div className="users__container">
            <div className="users__header">
              <PageTitle title="Users" />
              <div className="typeOfusers">
                {userTypes.map((userType: UserType) => {
                  return (
                    <div className="typeOfusers__card" key={userType?.id}>
                      <div className={`icon ${userType?.classes}`}>
                        <img src={userType?.icon} alt="icons" />
                      </div>
                      <p className="userType">{userType?.userType}</p>
                      <p className="no_Ofusers">
                        {numberFormat(userType?.no_OfUsers)}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="users__body">
              <table className="users__table">
                <thead>
                  <tr>
                    <th>
                      <div className="table__header">
                        <p>Organisation</p>
                        <div className="icon">
                          <img src={filter} alt="" />
                        </div>
                      </div>
                    </th>
                    <th>
                      <div className="table__header">
                        <p>Username</p>
                        <div className="icon">
                          <img src={filter} alt="" />
                        </div>
                      </div>
                    </th>
                    <th>
                      <div className="table__header">
                        <p>Email</p>
                        <div className="icon">
                          <img src={filter} alt="" />
                        </div>
                      </div>
                    </th>
                    <th>
                      <div className="table__header">
                        <p>Phone number</p>
                        <div className="icon">
                          <img src={filter} alt="" />
                        </div>
                      </div>
                    </th>
                    <th>
                      <div className="table__header">
                        <p>Date joined</p>
                        <div className="icon">
                          <img src={filter} alt="" />
                        </div>
                      </div>
                    </th>
                    <th>
                      <div className="table__header">
                        <p>Status</p>
                        <div className="icon">
                          <img src={filter} alt="" />
                        </div>
                      </div>
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {currentItems.map((user: User, index: number) => {
                    return (
                      <tr
                        key={user.id}
                        onClick={() => handleClick(user.id)}
                        className="table__row"
                      >
                        <td>{user.orgName}</td>
                        <td>{user.userName}</td>
                        <td>{user.email}</td>
                        <td>{user.phoneNumber}</td>
                        <td>{user.createdAt}</td>
                        <td>
                          {openModalIndex === index ? usersStatus : usersStatus}
                        </td>
                        <td>
                          <BsThreeDotsVertical
                            onClick={(e) => {
                              e.stopPropagation();
                              handleClickModal(index);
                            }}
                          />
                        </td>
                        {openModalIndex === index && (
                          <div className="select__usertype">
                            <ul>
                              <li>
                                {" "}
                                <AiOutlineEye />
                                View Details
                              </li>
                              <li
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleStatusChange("Blacklisted");
                                }}
                              >
                                {" "}
                                <RiUserUnfollowLine /> Blacklist User
                              </li>
                              <li
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleStatusChange("active");
                                }}
                              >
                                <RiUserFollowLine /> Activate User
                              </li>
                            </ul>
                          </div>
                        )}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              {showFilterModal && (
                <div className="users__filterModal">
                  <form className="filterModal">
                    <div className="input__field">
                      <label htmlFor="Organisation">Organisation</label>
                      <select id="Organisation">
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option selected value="coconut">
                          Coconut
                        </option>
                        <option value="mango">Mango</option>
                      </select>
                    </div>
                    <div className="input__field">
                      <label htmlFor="Username">Username</label>
                      <input type="text" placeholder="User" />
                    </div>
                    <div className="input__field">
                      <label htmlFor="Email">Email</label>
                      <input type="email" placeholder="Email" />
                    </div>
                    <div className="input__field">
                      <label htmlFor="Date">Date</label>
                      <input type="date" id="Date" />
                    </div>
                    <div className="input__field">
                      <label htmlFor="PhoneNumber">Phone Number</label>
                      <input type="text" placeholder="Phone number" />
                    </div>
                    <div className="input__field">
                      <label htmlFor="status">Status</label>
                      <select id="status">
                        <option value="Pending">Pending</option>
                        <option value="Active">Active</option>
                        <option selected value="Inactive">
                          Inactive
                        </option>
                        <option value="Blacklisted">Blacklisted</option>
                      </select>
                    </div>
                    <div className="filter__btn">
                      <button type="reset" className="btn__reset">
                        Reset
                      </button>
                      <button type="submit" className="btn__filter">
                        Filter
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
            <div className="users__filter">
              <div className="users__display">
                <p>Showing </p>
                <div
                  className="filter"
                  onClick={() => {
                    setShowFilterModel(!showFilterModal);
                  }}
                >
                  100 <AiOutlineDown />
                </div>
                <p>out of 100 </p>
              </div>
              <div className="users__pages">
                <div className="pagination">
                  <button 
                  title='previous'
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    <RiArrowLeftSLine />
                  </button>
                  {currentPage > 2 && (
                    <>
                      <button onClick={() => handlePageChange(1)}>1</button>
                      {currentPage > 3 && <span className="ellipsis">...</span>}
                    </>
                  )}
                  {Array.from({ length: totalPages }, (_, i) => i + 1)
                    .slice(currentPage - 3, currentPage + 1)
                    .map((page) => (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={page === currentPage ? "active" : ""}
                      >
                        {page}
                      </button>
                    ))}
                  {currentPage < totalPages - 1 && (
                    <>
                      {currentPage < totalPages - 1 && (
                        <span className="ellipsis">...</span>
                      )}
                      <button onClick={() => handlePageChange(totalPages)}>
                        {totalPages}
                      </button>
                    </>
                  )}
                  <button
                  title='Next'
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    <RiArrowRightSLine />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {error ? <Error message={error} /> : null}
    </>
  );
};

export default Users;
