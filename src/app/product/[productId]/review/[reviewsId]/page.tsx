import React from "react";

const ReviewDetailsId = ({ params }: { params: { reviewsId: string } }) => {
  return <div>page {params.reviewsId} </div>;
};

export default ReviewDetailsId;
