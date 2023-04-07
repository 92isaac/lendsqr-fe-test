import backIcon from "../assets/icons/np_back.svg";
import "../styles/UserDetails.scss";
import { PageTitle } from "../components";
import { BsStarFill, BsStar, BsStarHalf } from "react-icons/bs";
import { formatCurrency } from "../helpers/NumberFormatter";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { endpoint } from "../helpers/ApiEndpoint";
import ApiRoutes from "../helpers/ApiRoutes";
import Loading from "../helpers/Loading";
import Error from "../helpers/Error";

interface UserDetails {
  profile: {
    avatar: string;
    firstName: string;
    lastName: string;
    bvn: string;
    gender: string;
    phoneNumber: string;
  };
  email: string;
  education?: {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    monthlyIncome?: any;
    loanRepayment: any;
    officeEmail: string;
  };
  guarantor: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
  };
  socials: {
    facebook: string;
    twitter: string;
    instagram: string;
  };
}

const UserDetail = (): JSX.Element => {
  const [userDetails, setUserDetails] = useState<UserDetails | null>(null);
  const navigate = useNavigate();
  const { userId } = useParams<{ userId: string }>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getUserDetails = async () => {
      try {
        const { data } = await axios.get<UserDetails>(
          endpoint + ApiRoutes.user.user_details + userId
        );
        setUserDetails(data);
        setIsLoading(false);
      } catch (err: any) {
        setError(err?.message);
        setIsLoading(false);
      }
    };
    getUserDetails();
  }, [userId]);

  const stars = 2;
  const starCount = Array.from({ length: 3 }, (_, index) => {
    const number = index + 0.5;
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <BsStarFill style={{ color: "ffb900" }} />
        ) : stars >= number ? (
          <BsStarHalf style={{ color: "ffb900" }} />
        ) : (
          <BsStar style={{ color: "ffb900" }} />
        )}
      </span>
    );
  });
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="userdetail">
          <div className="userdetail__container">
            <div className="userdetail__header">
              <div className="previous__page">
                <img src={backIcon} alt="" />
                <p onClick={() => navigate(-1)}>Back to Users</p>
              </div>
              <div className="pageHero">
                <PageTitle title="User Details" />
                <div className="pageHero__btns">
                  <button className="blacklist">BlackList user</button>
                  <button className="active">Activate User</button>
                </div>
              </div>
              <div className="userdetail__overview">
                <div className="userdetailOverview__container">
                  <div className="user__info">
                    <div className="img__container">
                      <img src={userDetails?.profile?.avatar} alt="" />
                    </div>
                    <div className="userName">
                      <h2>{`${userDetails?.profile?.firstName} ${userDetails?.profile?.lastName} `}</h2>
                      <p>LSQFf587g90</p>
                    </div>
                  </div>
                  <div className="user__tier">
                    <p>User's Tier</p>
                    <div className="starRating">{starCount}</div>
                  </div>
                  <div className="user__account">
                    <p className="account__balance">{formatCurrency(200000)}</p>
                    <p>9912345678/Providus Bank</p>
                  </div>
                </div>
                <div className="userDetail__Nav">
                  <ul>
                    <li>General Details</li>
                    <li>Documents</li>
                    <li>Bank Details</li>
                    <li>Loans</li>
                    <li>Savings</li>
                    <li>App and System</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="userdetail__body">
              <h1>Personal Information</h1>
              <div className="personal__info">
                <div className="info__details">
                  <h2>Full name</h2>
                  <p>{`${userDetails?.profile?.firstName} ${userDetails?.profile?.lastName} `}</p>
                </div>
                <div className="info__details">
                  <h2>Phone Number</h2>
                  <p>{userDetails?.profile.phoneNumber}</p>
                </div>
                <div className="info__details">
                  <h2>Email Address</h2>
                  <p>{userDetails?.email}</p>
                </div>
                <div className="info__details">
                  <h2>Bvn</h2>
                  <p>{userDetails?.profile?.bvn}</p>
                </div>
                <div className="info__details">
                  <h2>Gender</h2>
                  <p>{userDetails?.profile?.gender}</p>
                </div>
                <div className="info__details">
                  <h2>Marital Status</h2>
                  <p>single</p>
                </div>
                <div className="info__details">
                  <h2>Children</h2>
                  <p>None</p>
                </div>
                <div className="info__details">
                  <h2>Type Of residence</h2>
                  <p>Parents Apartment</p>
                </div>
              </div>
              <h1>Education and Employment</h1>
              <div className="personal__info">
                <div className="info__details">
                  <h2>Level of Education</h2>
                  <p> {userDetails?.education?.level}</p>
                </div>
                <div className="info__details">
                  <h2>Employment Status</h2>
                  <p> {userDetails?.education?.employmentStatus}</p>
                </div>
                <div className="info__details">
                  <h2>Sector Of Employment</h2>
                  <p> {userDetails?.education?.sector}</p>
                </div>
                <div className="info__details">
                  <h2>Duration of Employment</h2>
                  <p> {userDetails?.education?.duration}</p>
                </div>
                <div className="info__details">
                  <h2>Office Email</h2>
                  <p> {userDetails?.education?.officeEmail}</p>
                </div>
                <div className="info__details">
                  <h2>Monthly Income</h2>
                  <p>{`${formatCurrency(
                    userDetails?.education?.monthlyIncome[0]
                  )} - ${formatCurrency(
                    userDetails?.education?.monthlyIncome[1]
                  )}`}</p>
                </div>
                <div className="info__details">
                  <h2>Loan REpayment</h2>
                  <p>{`${formatCurrency(
                    userDetails?.education?.loanRepayment
                  )}`}</p>
                </div>
              </div>

              <h1>Socials</h1>
              <div className="personal__info">
                <div className="info__details">
                  <h2>Twitter</h2>
                  <p> {userDetails?.socials?.twitter}</p>
                </div>
                <div className="info__details">
                  <h2>Facebook</h2>
                  <p> {userDetails?.socials?.facebook}</p>
                </div>
                <div className="info__details">
                  <h2>Instagram</h2>
                  <p> {userDetails?.socials?.instagram}</p>
                </div>
              </div>
              <h1>Guarantor</h1>
              <div className="personal__info">
                <div className="info__details">
                  <h2>Full name</h2>
                  <p>{`${userDetails?.guarantor?.firstName} ${userDetails?.guarantor?.lastName} `}</p>
                </div>
                <div className="info__details">
                  <h2>Phone Number</h2>
                  <p>{userDetails?.guarantor?.phoneNumber}</p>
                </div>
                <div className="info__details">
                  <h2>Email Address</h2>
                  <p>{`${userDetails?.guarantor?.firstName}@gmail.com`}</p>
                </div>
                <div className="info__details">
                  <h2>Relationship</h2>
                  <p>Family</p>
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

export default UserDetail;
