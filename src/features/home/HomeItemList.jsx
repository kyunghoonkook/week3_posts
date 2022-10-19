import React, { useEffect } from "react";
import Card from "../../components/Card";
import HomeHeader from "../../components/HomeHeader";
import { __getPostThunk } from "../../redux/modules/postsSlice";
import { useDispatch, useSelector } from "react-redux";
// import ReactPaginate from "react-paginate";
import "../../css/pagination.css";

const HomeItemList = ({ authenticate, setAuthenticate }) => {
  const dispatch = useDispatch();

  const posts = useSelector((state) => state.posts.posts);
  // const [currentItems, setCurrentItems] = useState([]);
  // const [pageCount, setPageCount] = useState(0);
  // const [itemOffset, setItemOffset] = useState(0);
  // const itemsPerPage = 3;

  // const handlePageClick = (event) => {
  //   const newOffset = (event.selected * itemsPerPage) % posts.length;
  //   setItemOffset(newOffset);
  // };

  useEffect(() => {
    dispatch(__getPostThunk());
  }, [dispatch]);

  // useEffect(() => {
  //   const endOffset = itemOffset + itemsPerPage;
  //   setCurrentItems(posts.slice(itemOffset, endOffset));
  //   setPageCount(Math.ceil(posts.length / itemsPerPage));
  // }, [itemOffset, itemsPerPage, posts]);

  return (
    <div>
      <HomeHeader
        authenticate={authenticate}
        setAuthenticate={setAuthenticate}
      />
      {posts?.map((post) => (
        <Card key={post.id} post={post} />
      ))}
      {/* <ReactPaginate
        breakLabel="...."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        containerClassName="pagination"
        pageLinkClassName="page-num"
        previousLinkClassName="page-num"
        nextLinkClassName="page-num"
        activeLinkClassName="active"
      /> */}
    </div>
  );
};

export default HomeItemList;
