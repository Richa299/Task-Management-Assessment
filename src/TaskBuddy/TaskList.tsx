interface OnClick {
  onClick: () => void;
}
export default function TaskList({ onClick }: OnClick) {
  return (
    <>
      {/* to do */}

      <p>List</p>
      <p>Board</p>

      <button onClick={onClick}> logout</button>
      <div>
        <h4>To do</h4>
      </div>
      <div>
        <h4>In progress</h4>
      </div>
      <div>
        <h4>Completed</h4>
      </div>
    </>
  );
}
