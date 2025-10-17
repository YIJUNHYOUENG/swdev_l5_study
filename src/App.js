import React, { useState } from 'react';
import { Home, Book, FileQuestion, Plus, ChevronRight } from 'lucide-react';

export default function ExamStudyApp() {
  const [selectedMenu, setSelectedMenu] = useState('home');

  const renderScreen = () => {
    switch (selectedMenu) {
      case 'home':
        return <HomeScreen onNavigate={setSelectedMenu}/>;
      case 'study':
        return <StudyMaterialScreen />;
      case 'exam':
        return <ExamScreen />;
      default:
        return <HomeScreen onNavigate={setSelectedMenu}/>;
    }
  };

  return (
    <>
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
          background-color: #f5f5f5;
        }

        .app-container {
          max-width: 768px;
          margin: 0 auto;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background-color: white;
        }

        .screen-content {
          flex: 1;
          overflow-y: auto;
          padding-bottom: 80px;
        }

        .header {
          background-color: #2563eb;
          color: white;
          padding: 20px;
          text-align: center;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }

        .header h1 {
          font-size: 24px;
          font-weight: bold;
        }

        .bottom-nav {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background-color: white;
          border-top: 1px solid #e5e7eb;
          box-shadow: 0 -2px 10px rgba(0,0,0,0.1);
          display: flex;
          justify-content: space-around;
          max-width: 768px;
          margin: 0 auto;
        }

        .nav-button {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 12px;
          background: none;
          border: none;
          cursor: pointer;
          color: #6b7280;
          transition: color 0.2s;
        }

        .nav-button.active {
          color: #2563eb;
        }

        .nav-button svg {
          margin-bottom: 4px;
        }

        .nav-button span {
          font-size: 12px;
        }

        .home-content {
          padding: 40px 20px;
          text-align: center;
        }

        .home-icon {
          width: 100px;
          height: 100px;
          background-color: #dbeafe;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 30px;
        }

        .home-icon svg {
          color: #2563eb;
        }

        .home-title {
          font-size: 32px;
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 15px;
        }

        .home-subtitle {
          font-size: 16px;
          color: #6b7280;
          margin-bottom: 50px;
        }

        .quick-buttons {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          margin-bottom: 40px;
        }

        .quick-button {
          background-color: #10b981;
          color: white;
          border: none;
          border-radius: 16px;
          padding: 30px 20px;
          cursor: pointer;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          transition: all 0.2s;
        }

        .quick-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 12px rgba(0,0,0,0.15);
        }

        .quick-button.exam {
          background-color: #f97316;
        }

        .quick-button svg {
          margin-bottom: 10px;
        }

        .quick-button span {
          display: block;
          font-weight: 600;
          font-size: 16px;
        }

        .stats-card {
          background-color: white;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
          text-align: left;
        }

        .stats-card h3 {
          font-size: 18px;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 20px;
        }

        .stat-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .stat-item:last-child {
          margin-bottom: 0;
        }

        .stat-label {
           font-size: 18px;
           font-weight: bold;
           margin-bottom: 10px;
        }

        .list-content {
          padding: 16px;
        }

        .list-item {
          background-color: white;
          border-radius: 12px;
          padding: 16px;
          margin-bottom: 12px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
          display: flex;
          align-items: center;
          justify-content: space-between;
          cursor: pointer;
          transition: box-shadow 0.2s;
        }

        .list-item:hover {
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
        }

        .list-item-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .list-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: #2563eb;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          font-size: 18px;
        }

        .list-avatar.exam {
          background-color: #f97316;
        }

        .list-info h3 {
          font-size: 16px;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 4px;
        }

        .list-info p {
          font-size: 14px;
          color: #6b7280;
        }

        .list-arrow {
          color: #9ca3af;
        }

        .start-button {
          background-color: #2563eb;
          color: white;
          border: none;
          border-radius: 8px;
          padding: 8px 24px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .start-button:hover {
          background-color: #1d4ed8;
        }

        .fab {
          position: fixed;
          bottom: 100px;
          right: 24px;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background-color: #2563eb;
          color: white;
          border: none;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
        }

        .fab:hover {
          background-color: #1d4ed8;
          transform: scale(1.1);
        }

        .fab.exam {
          background-color: #f97316;
        }

        .fab.exam:hover {
          background-color: #ea580c;
        }
      `}</style>

      <div className="app-container">
        <div className="screen-content">
          {renderScreen()}
        </div>

        <div className="bottom-nav">
          <button 
            className={`nav-button ${selectedMenu === 'home' ? 'active' : ''}`}
            onClick={() => setSelectedMenu('home')}
          >
            <Home size={24} />
            <span>홈</span>
          </button>
          <button 
            className={`nav-button ${selectedMenu === 'study' ? 'active' : ''}`}
            onClick={() => setSelectedMenu('study')}
          >
            <Book size={24} />
            <span>공부 자료</span>
          </button>
          <button 
            className={`nav-button ${selectedMenu === 'exam' ? 'active' : ''}`}
            onClick={() => setSelectedMenu('exam')}
          >
            <FileQuestion size={24} />
            <span>시험 문제</span>
          </button>
        </div>
      </div>
    </>
  );
}

function HomeScreen({ onNavigate }) {
  return (
    <>
      <div className="header">
        <h1>외부평가 SW개발_L5 준비</h1>
      </div>
      
      <div className="home-content">
        <div className="home-icon">
          <Book size={50} />
        </div>
        <h2 className="home-title">환영합니다!</h2>
        <p className="home-subtitle">시험 준비를 시작해보세요</p>

        <div className="quick-buttons">
          <button className="quick-button" onClick={() => onNavigate('study')}>
            <Book size={40} />
            <span>공부 자료</span>
          </button>
          <button className="quick-button exam" onClick={() => onNavigate('exam')}>
            <FileQuestion size={40} />
            <span>시험 문제</span>
          </button>
        </div>

        <div className="stats-card">
          <h3>시험 방식</h3>
          <div className="stat-label">지필평가(시험시간 40분)</div>
          <div>요구사항 확인</div>
          <div>제품소프트웨어 패키징</div>
          <div>애플리케이션 테스트 관리</div>
          <div>소프트웨어 개발 보안 구축</div>
          <div className="stat-label" style={{marginTop: "10px"}}>작업평가(3시간 30분)</div>
          <div>데이터 입출력 구현</div>
          <div>SQL응용</div>
          <div>통합구현</div>
          <div>인터페이스 구현</div>
          <div>서버프로그램 구현</div>
          <div>화면설계</div>
        </div>
      </div>
    </>
  );
}

function StudyMaterialScreen() {
  const materials = [
    { id: 1, title: '과목 1', description: '학습 자료를 확인하세요' },
    { id: 2, title: '과목 2', description: '학습 자료를 확인하세요' },
    { id: 3, title: '과목 3', description: '학습 자료를 확인하세요' },
    { id: 4, title: '과목 4', description: '학습 자료를 확인하세요' },
    { id: 5, title: '과목 5', description: '학습 자료를 확인하세요' },
  ];

  return (
    <>
      <div className="header">
        <h1>공부 자료</h1>
      </div>

      <div className="list-content">
        {materials.map((material) => (
          <div key={material.id} className="list-item">
            <div className="list-item-left">
              <div className="list-avatar">{material.id}</div>
              <div className="list-info">
                <h3>{material.title}</h3>
                <p>{material.description}</p>
              </div>
            </div>
            <ChevronRight size={20} className="list-arrow" />
          </div>
        ))}
      </div>

      <button className="fab">
        <Plus size={24} />
      </button>
    </>
  );
}

function ExamScreen() {
  const exams = [
    { id: 1, title: '시험 세트 1', questions: 10 },
    { id: 2, title: '시험 세트 2', questions: 10 },
    { id: 3, title: '시험 세트 3', questions: 10 },
    { id: 4, title: '시험 세트 4', questions: 10 },
    { id: 5, title: '시험 세트 5', questions: 10 },
  ];

  return (
    <>
      <div className="header">
        <h1>시험 문제</h1>
      </div>

      <div className="list-content">
        {exams.map((exam) => (
          <div key={exam.id} className="list-item">
            <div className="list-item-left">
              <div className="list-avatar exam">
                <FileQuestion size={24} />
              </div>
              <div className="list-info">
                <h3>{exam.title}</h3>
                <p>문제 수: {exam.questions}개</p>
              </div>
            </div>
            <button className="start-button">시작</button>
          </div>
        ))}
      </div>

      <button className="fab exam">
        <Plus size={24} />
      </button>
    </>
  );
}