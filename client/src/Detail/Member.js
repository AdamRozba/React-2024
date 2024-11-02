function Member({ data, handlerMap, isOwner, showRemoveButton }) {
  return (
    <div>
      {data.name}
      {isOwner ? " vlastník " : " "}
      {showRemoveButton ? (
        <button
          style={{
            marginLeft: "20px",
            borderRadius: "5px",
          }}
          onClick={() => handlerMap.removeMember({ memberId: data.id })}
        >
          Opustit
        </button>
      ) : null}
    </div>
  );
}

export default Member;
