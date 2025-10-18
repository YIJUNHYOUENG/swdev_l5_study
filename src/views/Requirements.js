import React, { useState } from 'react';
import { Home, Book, FileQuestion, Plus, ChevronRight, ArrowLeft, BookOpen, CheckCircle } from 'lucide-react';

// 메인 App 컴포넌트
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  const navigate = (page, data = null) => {
    setCurrentPage(page);
    if (data) setSelectedMaterial(data);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage navigate={navigate} />;
      case 'study':
        return <StudyMaterialPage navigate={navigate} />;
      case 'study-detail':
        return <MaterialDetailPage navigate={navigate} material={selectedMaterial} />;
      case 'exam':
        return <ExamPage navigate={navigate} />;
      default:
        return <HomePage navigate={navigate} />;
    }
  };

  return (
    <div className="app-container">
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

        .page-content {
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

        .back-button {
          background: none;
          border: none;
          color: white;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          font-size: 16px;
          padding: 8px;
          margin: -8px;
        }

        .back-button:hover {
          opacity: 0.8;
        }

        .detail-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .progress-section {
          background-color: #dbeafe;
          padding: 20px;
          margin: 16px;
          border-radius: 12px;
        }

        .progress-bar {
          width: 100%;
          height: 8px;
          background-color: white;
          border-radius: 4px;
          overflow: hidden;
          margin: 12px 0;
        }

        .progress-fill {
          height: 100%;
          background-color: #2563eb;
          transition: width 0.3s;
        }

        .progress-text {
          font-size: 14px;
          color: #1e40af;
          font-weight: 600;
        }

        .chapter-list {
          padding: 0 16px 16px;
        }

        .chapter-item {
          background-color: white;
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 12px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
          border-left: 4px solid #e5e7eb;
          transition: all 0.2s;
        }

        .chapter-item.completed {
          border-left-color: #10b981;
          background-color: #f0fdf4;
        }

        .chapter-item:hover {
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          transform: translateX(4px);
        }

        .chapter-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 12px;
        }

        .chapter-title {
          font-size: 18px;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 4px;
        }

        .chapter-subtitle {
          font-size: 14px;
          color: #6b7280;
        }

        .chapter-status {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 14px;
          font-weight: 600;
        }

        .chapter-status.completed {
          color: #10b981;
        }

        .chapter-status.pending {
          color: #6b7280;
        }

        .chapter-description {
          font-size: 14px;
          color: #4b5563;
          line-height: 1.5;
          margin-bottom: 12px;
        }

        .chapter-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .chapter-meta {
          font-size: 13px;
          color: #9ca3af;
        }

        .study-button {
          background-color: #2563eb;
          color: white;
          border: none;
          border-radius: 8px;
          padding: 8px 20px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .study-button:hover {
          background-color: #1d4ed8;
        }

        .study-button.completed {
          background-color: #10b981;
        }

        .study-button.completed:hover {
          background-color: #059669;
        }
      `}</style>

      <div className="page-content">
        {renderPage()}
      </div>

      <BottomNavigation currentPage={currentPage} navigate={navigate} />
    </div>
  );
}

// 하단 네비게이션 컴포넌트
function BottomNavigation({ currentPage, navigate }) {
  const getBasePage = (page) => {
    if (page === 'study-detail') return 'study';
    return page;
  };

  const basePage = getBasePage(currentPage);

  return (
    <div className="bottom-nav">
      <button 
        className={`nav-button ${basePage === 'home' ? 'active' : ''}`}
        onClick={() => navigate('home')}
      >
        <Home size={24} />
        <span>홈</span>
      </button>
      <button 
        className={`nav-button ${basePage === 'study' ? 'active' : ''}`}
        onClick={() => navigate('study')}
      >
        <Book size={24} />
        <span>공부 자료</span>
      </button>
      <button 
        className={`nav-button ${basePage === 'exam' ? 'active' : ''}`}
        onClick={() => navigate('exam')}
      >
        <FileQuestion size={24} />
        <span>시험 문제</span>
      </button>
    </div>
  );
}

// 홈 페이지
function HomePage({ navigate }) {
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
          <button className="quick-button" onClick={() => navigate('study')}>
            <Book size={40} />
            <span>공부 자료</span>
          </button>
          <button className="quick-button exam" onClick={() => navigate('exam')}>
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

// 공부 자료 목록 페이지
function StudyMaterialPage({ navigate }) {
  const materials = [
    { id: 1, title: '요구사항 확인', description: '학습 자료를 확인하세요', chapters: 8, completed: 5 },
    { id: 2, title: '제품소프트웨어 패키징', description: '학습 자료를 확인하세요', chapters: 6, completed: 2 },
    { id: 3, title: '애플리케이션 테스트 관리', description: '학습 자료를 확인하세요', chapters: 7, completed: 0 },
    { id: 4, title: '소프트웨어 개발 보안 구축', description: '학습 자료를 확인하세요', chapters: 9, completed: 0 },
    { id: 5, title: 'SQL 응용', description: '학습 자료를 확인하세요', chapters: 10, completed: 7 },
  ];

  return (
    <>
      <div className="header">
        <h1>공부 자료</h1>
      </div>

      <div className="list-content">
        {materials.map((material) => (
          <div 
            key={material.id} 
            className="list-item" 
            onClick={() => navigate('study-detail', material)}
          >
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

// 과목 상세 페이지
function MaterialDetailPage({ navigate, material }) {
  const [chapters, setChapters] = useState([
    { id: 1, title: '1장', subtitle: '기본 개념', description: '기초 이론과 핵심 개념을 학습합니다.', duration: '30분', completed: true },
    { id: 2, title: '2장', subtitle: '실무 적용', description: '실제 프로젝트에 적용하는 방법을 배웁니다.', duration: '45분', completed: true },
    { id: 3, title: '3장', subtitle: '심화 학습', description: '고급 기술과 최적화 방법을 다룹니다.', duration: '60분', completed: false },
    { id: 4, title: '4장', subtitle: '사례 연구', description: '실제 사례를 통해 문제 해결 능력을 키웁니다.', duration: '40분', completed: false },
    { id: 5, title: '5장', subtitle: '종합 정리', description: '전체 내용을 복습하고 정리합니다.', duration: '35분', completed: false },
  ]);

  const completedCount = chapters.filter(ch => ch.completed).length;
  const progress = (completedCount / chapters.length) * 100;

  const toggleChapterComplete = (chapterId) => {
    setChapters(chapters.map(ch => 
      ch.id === chapterId ? { ...ch, completed: !ch.completed } : ch
    ));
  };

  return (
    <>
      <div className="header">
        <div className="detail-header">
          <button className="back-button" onClick={() => navigate('study')}>
            <ArrowLeft size={20} />
            <span>뒤로</span>
          </button>
          <h1>{material?.title || '과목'}</h1>
          <div style={{ width: '60px' }}></div>
        </div>
      </div>

      <div className="progress-section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="progress-text">학습 진도</span>
          <span className="progress-text">{completedCount}/{chapters.length} 완료</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>
        <p style={{ fontSize: '14px', color: '#1e40af', marginTop: '8px' }}>
          {progress.toFixed(0)}% 완료
        </p>
      </div>

      <div className="chapter-list">
        {chapters.map((chapter) => (
          <div key={chapter.id} className={`chapter-item ${chapter.completed ? 'completed' : ''}`}>
            <div className="chapter-header">
              <div>
                <div className="chapter-title">{chapter.title}. {chapter.subtitle}</div>
                <div className="chapter-subtitle">{chapter.description}</div>
              </div>
              <div className={`chapter-status ${chapter.completed ? 'completed' : 'pending'}`}>
                {chapter.completed && <CheckCircle size={18} />}
                <span>{chapter.completed ? '완료' : '미완료'}</span>
              </div>
            </div>
            <div className="chapter-footer">
              <div className="chapter-meta">
                <BookOpen size={14} style={{ display: 'inline', marginRight: '4px' }} />
                예상 시간: {chapter.duration}
              </div>
              <button 
                className={`study-button ${chapter.completed ? 'completed' : ''}`}
                onClick={() => toggleChapterComplete(chapter.id)}
              >
                {chapter.completed ? '다시 학습' : '학습 시작'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

// 시험 문제 페이지
function ExamPage({ navigate }) {
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
}import React, { useState } from 'react';
import { Home, Book, FileQuestion, Plus, ChevronRight, ArrowLeft, BookOpen, CheckCircle } from 'lucide-react';

// 메인 App 컴포넌트
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  const navigate = (page, data = null) => {
    setCurrentPage(page);
    if (data) setSelectedMaterial(data);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage navigate={navigate} />;
      case 'study':
        return <StudyMaterialPage navigate={navigate} />;
      case 'study-detail':
        return <MaterialDetailPage navigate={navigate} material={selectedMaterial} />;
      case 'exam':
        return <ExamPage navigate={navigate} />;
      default:
        return <HomePage navigate={navigate} />;
    }
  };

  return (
    <div className="app-container">
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

        .page-content {
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

        .back-button {
          background: none;
          border: none;
          color: white;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          font-size: 16px;
          padding: 8px;
          margin: -8px;
        }

        .back-button:hover {
          opacity: 0.8;
        }

        .detail-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .progress-section {
          background-color: #dbeafe;
          padding: 20px;
          margin: 16px;
          border-radius: 12px;
        }

        .progress-bar {
          width: 100%;
          height: 8px;
          background-color: white;
          border-radius: 4px;
          overflow: hidden;
          margin: 12px 0;
        }

        .progress-fill {
          height: 100%;
          background-color: #2563eb;
          transition: width 0.3s;
        }

        .progress-text {
          font-size: 14px;
          color: #1e40af;
          font-weight: 600;
        }

        .chapter-list {
          padding: 0 16px 16px;
        }

        .chapter-item {
          background-color: white;
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 12px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
          border-left: 4px solid #e5e7eb;
          transition: all 0.2s;
        }

        .chapter-item.completed {
          border-left-color: #10b981;
          background-color: #f0fdf4;
        }

        .chapter-item:hover {
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          transform: translateX(4px);
        }

        .chapter-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 12px;
        }

        .chapter-title {
          font-size: 18px;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 4px;
        }

        .chapter-subtitle {
          font-size: 14px;
          color: #6b7280;
        }

        .chapter-status {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 14px;
          font-weight: 600;
        }

        .chapter-status.completed {
          color: #10b981;
        }

        .chapter-status.pending {
          color: #6b7280;
        }

        .chapter-description {
          font-size: 14px;
          color: #4b5563;
          line-height: 1.5;
          margin-bottom: 12px;
        }

        .chapter-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .chapter-meta {
          font-size: 13px;
          color: #9ca3af;
        }

        .study-button {
          background-color: #2563eb;
          color: white;
          border: none;
          border-radius: 8px;
          padding: 8px 20px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .study-button:hover {
          background-color: #1d4ed8;
        }

        .study-button.completed {
          background-color: #10b981;
        }

        .study-button.completed:hover {
          background-color: #059669;
        }
      `}</style>

      <div className="page-content">
        {renderPage()}
      </div>

      <BottomNavigation currentPage={currentPage} navigate={navigate} />
    </div>
  );
}

// 하단 네비게이션 컴포넌트
function BottomNavigation({ currentPage, navigate }) {
  const getBasePage = (page) => {
    if (page === 'study-detail') return 'study';
    return page;
  };

  const basePage = getBasePage(currentPage);

  return (
    <div className="bottom-nav">
      <button 
        className={`nav-button ${basePage === 'home' ? 'active' : ''}`}
        onClick={() => navigate('home')}
      >
        <Home size={24} />
        <span>홈</span>
      </button>
      <button 
        className={`nav-button ${basePage === 'study' ? 'active' : ''}`}
        onClick={() => navigate('study')}
      >
        <Book size={24} />
        <span>공부 자료</span>
      </button>
      <button 
        className={`nav-button ${basePage === 'exam' ? 'active' : ''}`}
        onClick={() => navigate('exam')}
      >
        <FileQuestion size={24} />
        <span>시험 문제</span>
      </button>
    </div>
  );
}

// 홈 페이지
function HomePage({ navigate }) {
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
          <button className="quick-button" onClick={() => navigate('study')}>
            <Book size={40} />
            <span>공부 자료</span>
          </button>
          <button className="quick-button exam" onClick={() => navigate('exam')}>
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

// 공부 자료 목록 페이지
function StudyMaterialPage({ navigate }) {
  const materials = [
    { id: 1, title: '요구사항 확인', description: '학습 자료를 확인하세요', chapters: 8, completed: 5 },
    { id: 2, title: '제품소프트웨어 패키징', description: '학습 자료를 확인하세요', chapters: 6, completed: 2 },
    { id: 3, title: '애플리케이션 테스트 관리', description: '학습 자료를 확인하세요', chapters: 7, completed: 0 },
    { id: 4, title: '소프트웨어 개발 보안 구축', description: '학습 자료를 확인하세요', chapters: 9, completed: 0 },
    { id: 5, title: 'SQL 응용', description: '학습 자료를 확인하세요', chapters: 10, completed: 7 },
  ];

  return (
    <>
      <div className="header">
        <h1>공부 자료</h1>
      </div>

      <div className="list-content">
        {materials.map((material) => (
          <div 
            key={material.id} 
            className="list-item" 
            onClick={() => navigate('study-detail', material)}
          >
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

// 과목 상세 페이지
function MaterialDetailPage({ navigate, material }) {
  const [chapters, setChapters] = useState([
    { id: 1, title: '1장', subtitle: '기본 개념', description: '기초 이론과 핵심 개념을 학습합니다.', duration: '30분', completed: true },
    { id: 2, title: '2장', subtitle: '실무 적용', description: '실제 프로젝트에 적용하는 방법을 배웁니다.', duration: '45분', completed: true },
    { id: 3, title: '3장', subtitle: '심화 학습', description: '고급 기술과 최적화 방법을 다룹니다.', duration: '60분', completed: false },
    { id: 4, title: '4장', subtitle: '사례 연구', description: '실제 사례를 통해 문제 해결 능력을 키웁니다.', duration: '40분', completed: false },
    { id: 5, title: '5장', subtitle: '종합 정리', description: '전체 내용을 복습하고 정리합니다.', duration: '35분', completed: false },
  ]);

  const completedCount = chapters.filter(ch => ch.completed).length;
  const progress = (completedCount / chapters.length) * 100;

  const toggleChapterComplete = (chapterId) => {
    setChapters(chapters.map(ch => 
      ch.id === chapterId ? { ...ch, completed: !ch.completed } : ch
    ));
  };

  return (
    <>
      <div className="header">
        <div className="detail-header">
          <button className="back-button" onClick={() => navigate('study')}>
            <ArrowLeft size={20} />
            <span>뒤로</span>
          </button>
          <h1>{material?.title || '과목'}</h1>
          <div style={{ width: '60px' }}></div>
        </div>
      </div>

      <div className="progress-section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="progress-text">학습 진도</span>
          <span className="progress-text">{completedCount}/{chapters.length} 완료</span>
        </div>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }}></div>
        </div>
        <p style={{ fontSize: '14px', color: '#1e40af', marginTop: '8px' }}>
          {progress.toFixed(0)}% 완료
        </p>
      </div>

      <div className="chapter-list">
        {chapters.map((chapter) => (
          <div key={chapter.id} className={`chapter-item ${chapter.completed ? 'completed' : ''}`}>
            <div className="chapter-header">
              <div>
                <div className="chapter-title">{chapter.title}. {chapter.subtitle}</div>
                <div className="chapter-subtitle">{chapter.description}</div>
              </div>
              <div className={`chapter-status ${chapter.completed ? 'completed' : 'pending'}`}>
                {chapter.completed && <CheckCircle size={18} />}
                <span>{chapter.completed ? '완료' : '미완료'}</span>
              </div>
            </div>
            <div className="chapter-footer">
              <div className="chapter-meta">
                <BookOpen size={14} style={{ display: 'inline', marginRight: '4px' }} />
                예상 시간: {chapter.duration}
              </div>
              <button 
                className={`study-button ${chapter.completed ? 'completed' : ''}`}
                onClick={() => toggleChapterComplete(chapter.id)}
              >
                {chapter.completed ? '다시 학습' : '학습 시작'}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

// 시험 문제 페이지
function ExamPage({ navigate }) {
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