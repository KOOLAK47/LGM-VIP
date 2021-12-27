import React from "react";
import { UserCard } from "./UserCard";
import Loader from "react-loader-spinner";

import Background from "./images/brick.jpg";

export const Users = (params) => {
  const bgstyle ={
    background: `url(${Background})`,
    minHeight:'100vh',
  }
  return (
    <div style={bgstyle}>
      {params.isLoading ? ( //Checkif if is loading
        <div style={{width:"100%", textAlign:'center', marginTop: "35vh", position: "absolute"}}>
          <Loader type="ThreeDots" color="white" height={120} width={120} />
        </div>
      ) : (
        <div className="row text-center justify-content-evenly" style={{width:"100%"}}>
          {params.data.map((user) => {
            return <UserCard key={user.id} useralld={user} />;
          })}
        </div>
      )}
    </div>
  );
};