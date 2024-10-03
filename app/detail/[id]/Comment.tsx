'use client'
import { useEffect, useState } from "react";
import { hide } from '../../styles/global.css';
import * as pageStyles from '../../styles/Pages.css';
import * as globalStyles from '../../styles/global.css';
import { ButtonType01 } from "@/app/components/Button";

export default function Comment(props) {
  const [comment, setComment] = useState('');
  const [data, setData] = useState([]);
  const [editCommentId, setEditCommentId] = useState();
  const [editContent, setEditContent] = useState('');
  const currentUser = props.currentUser || { email: 'default@example.com', role: 'user' };

  useEffect(() => {
    fetch(`/api/comment/list?id=${props._id}`, { method: 'GET' })
      .then(r => r.json())
      .then((result) => {
        setData(result);
      })
  }, [props._id]);

  const addComment = () => {
    fetch('/api/comment/new', {
      method: 'POST',
      body: JSON.stringify({
        comment: comment,
        _id: props._id,
      })
    })
      .then(res => res.json())
      .then((response) => {
        if (response.error) {
          alert(response.error); // 로그인 안 된 경우 에러 메시지 출력
        } else {
          setData(prevData => [...prevData, response.newComment]);
          setComment('');
          alert('작성완료');
        }
      });
  };

  const handleDeleteClick = (commentId, authorEmail) => {
    if (currentUser.email === authorEmail || currentUser.role === 'admin') {
      fetch('/api/comment/delete', {
        method: 'POST',
        body: JSON.stringify({ _id: commentId }),
      })
        .then(res => res.json())
        .then((result) => {
          if (result.success) {
            setData(prevData => prevData.filter(comment => comment._id !== commentId));
            alert('댓글이 삭제되었습니다.');
          } else {
            alert('댓글 삭제에 실패했습니다.');
          }
        });
    } else {
      alert('댓글을 삭제할 권한이 없습니다.');
    }
  };

  const handleEditClick = (commentId, content, authorEmail) => {
    if (currentUser.email === authorEmail || currentUser.role === 'admin') {
      setEditCommentId(commentId);
      setEditContent(content);
    } else {
      alert('댓글을 수정할 권한이 없습니다.');
    }
  };

  const editComment = () => {
    fetch('/api/comment/edit', {
      method: 'POST',
      body: JSON.stringify({
        _id: editCommentId,
        content: editContent,
      })
    })
      .then(res => res.json())
      .then(updatedComment => {
        setData(prevData => prevData.map(comment =>
          comment._id === updatedComment._id ? updatedComment : comment
        ));
        setEditCommentId(null);
        setEditContent('');
      });
  };

  return (
    <div className={pageStyles.commentWrap}>
      <strong className={pageStyles.commentWrapTit}>댓글 <span>{data.length}</span></strong>
      <div className={pageStyles.addComment}>
        <textarea
          name="comment"
          id="comment"
          className={`${globalStyles.inputStyles} ${globalStyles.inputTypeStyles.textarea} ${pageStyles.commentArea}`}
          onChange={(e) => { setComment(e.target.value) }}
        />
        <label htmlFor="comment" className={hide}>comment</label>
        <ButtonType01 onClick={addComment}>등록</ButtonType01>
      </div>
      <div className="comment-list">
        {
          data.length > 0 ?
            data.map((a, i) =>
              <div key={i} className={pageStyles.commentItem}>
                <div className={pageStyles.commentInfo}>
                  <div className={`${globalStyles.centerFlex} ${pageStyles.commentTit}`}>
                    <strong>{a.author_name}</strong>
                    <p>{a.createAt}</p>
                  </div>
                  {/* <div className={pageStyles.commentControls}>
                    {
                      editCommentId === a._id ? (
                        <>
                          <ButtonType01 onClick={editComment}>저장</ButtonType01>
                          <ButtonType01 onClick={() => setEditCommentId(null)}>취소</ButtonType01>
                        </>
                      ) : (
                        <>
                          <ButtonType01 onClick={() => handleEditClick(a._id, a.content)}>수정</ButtonType01>
                          <button onClick={() => handleDeleteClick(a._id, a.author_email)}>삭제</button>
                        </>
                      )
                    }
                  </div> */}
                </div>
                <div className={pageStyles.commentCont}>
                  <p>{a.content}</p>
                  {/* {
                    editCommentId === a._id ? (
                      <>
                        <textarea
                          name="editComment"
                          id="editComment"
                          className={`${globalStyles.inputStyles} ${globalStyles.inputTypeStyles.textarea} ${pageStyles.commentArea}`}
                          value={editContent}
                          onChange={(e) => setEditContent(e.target.value)}
                        />
                        <label htmlFor="editComment" className={hide}>comment</label>
                      </>
                    ) : (
                      <p>{a.content}</p>
                    )
                  } */}
                </div>
              </div>
            ) : (
              <div className={pageStyles.commentEmpty}>
                <p>등록된 댓글이 없습니다.</p>
              </div>
            )
        }
        {/* {
          data.length > 0 ?
            data.map((a, i) =>
              <div key={i} className={pageStyles.commentItem}>
                <div className={pageStyles.commentInfo}>
                  <div className={`${globalStyles.centerFlex} ${pageStyles.commentTit}`}>
                    <strong>{a.author_name}</strong>
                    <p>{a.createAt}</p>
                  </div>
                  <div className={pageStyles.commentControls}>
                    <ButtonType01 onClick={editComment}>수정</ButtonType01>
                    <ButtonType01>삭제</ButtonType01>
                    <ButtonType01>답글</ButtonType01>
                  </div>
                </div>
                <div className={pageStyles.commentCont}>
                  <p>{a.content}</p>
                </div>
              </div>
            ): (
              <div className={pageStyles.commentEmpty}>
                <p>등록된 댓글이 없습니다.</p>
              </div>
            )
        } */}
      </div>
    </div>
  )
}