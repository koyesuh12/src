import React, { useState } from "react";
import './css/My.css';

const My = () => {
    // 사용자 정보를 담는 상태
    const [userInfo, setUserInfo] = useState({
        username: "JohnDoe", // 예시 사용자명
        email: "johndoe@example.com", // 예시 이메일
        // 추가적인 사용자 정보 필드를 필요에 따라 추가할 수 있습니다.
    });

    // 사용자 정보 수정을 위한 상태
    const [editing, setEditing] = useState(false);

    // 수정된 사용자 정보를 저장하는 함수
    const saveUserInfo = () => {
        // 여기서 수정된 사용자 정보를 백엔드로 보낼 수 있습니다.
        // 예시로는 간단히 상태를 업데이트하겠습니다.
        setEditing(false); // 수정 모드를 종료
    };

    return (
        <div className="My">
            <h2 className="my-heading">마이페이지</h2>
            <div className="my-info">
                {/* 사용자 정보 표시 */}
                <div>
                    <label>사용자명: </label>
                    {editing ? (
                        <input
                            type="text"
                            value={userInfo.username}
                            onChange={(e) =>
                                setUserInfo({ ...userInfo, username: e.target.value })
                            }
                        />
                    ) : (
                        <span>{userInfo.username}</span>
                    )}
                </div>
                <div>
                    <label>이메일: </label>
                    {editing ? (
                        <input
                            type="email"
                            value={userInfo.email}
                            onChange={(e) =>
                                setUserInfo({ ...userInfo, email: e.target.value })
                            }
                        />
                    ) : (
                        <span>{userInfo.email}</span>
                    )}
                </div>
                {/* 수정 버튼 */}
                {!editing && (
                    <button onClick={() => setEditing(true)}>정보 수정</button>
                )}
                {/* 저장 버튼 */}
                {editing && (
                    <button onClick={saveUserInfo}>저장</button>
                )}
            </div>
        </div>
    );
};

export default My;
