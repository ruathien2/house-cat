import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import DashboardHeader from "./DashboardHeader";
import Sidebar from "./Sidebar";
import { useAuth } from "../../contexts/authContext";
import { NotFoundPage } from "../../pages";

const DashboardStyles = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  .dashboard {
    &-heading {
      font-weight: bold;
      font-size: 25px;
      margin-bottom: 5px;
      color: ${(props) => props.theme.black};
    }
    &-short-desc {
      font-size: 14px;
      color: ${(props) => props.theme.gray80};
    }
    &-main {
      display: grid;
      grid-template-columns: 300px minmax(0, 1fr);
      padding: 40px 20px;
      gap: 0 40px;
      align-items: start;
    }
    @media screen and (max-width: 1023.98px) {
      &-heading {
        font-size: 20px;
      }
      &-main {
        grid-template-columns: 100%;
        padding: 20px;
      }
    }
  }
`;

export default function DashboardLayout() {
  const { userInfo } = useAuth();
  if (!userInfo) return <NotFoundPage></NotFoundPage>;
  return (
    <DashboardStyles>
      <DashboardHeader></DashboardHeader>
      <div className="dashboard-main">
        <Sidebar></Sidebar>
        <div className="dashboard-children">
          <Outlet></Outlet>
        </div>
      </div>
    </DashboardStyles>
  );
}
