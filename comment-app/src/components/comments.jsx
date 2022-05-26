import "./components.css"
export const Comment=({ comment })=>{
    const Comments = (comment.replies || []).map(comment => {
      return <Comment key={comment.id} comment={comment} />
    })
  
    return (
      <div >
        <div className="firstDiv">
            <p>{comment.author} {comment.points} points {comment.timestamp}</p>
            <h3>{comment.body}</h3>
            
        </div>
        <div className="secondDiv">
        {comment.replies!=undefined?<h6>Replies</h6>:null}
        {Comments}
        </div>
      </div>
    )
  }