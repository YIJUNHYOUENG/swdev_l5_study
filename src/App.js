import React, { useState } from 'react';
import { Home, Book, FileQuestion, ChevronRight, ArrowLeft } from 'lucide-react';

// 메인 App 컴포넌트
export default function ExamStudyApp() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedMaterial, setSelectedMaterial] = useState(null);

  const navigate = (page, data = null) => {
    setCurrentPage(page);
    if (data) setSelectedMaterial(data);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomeScreen navigate={navigate} />;
      case 'study':
        return <StudyMaterialScreen navigate={navigate} />;
      case 'requirements':
        return <RequirementsScreen navigate={navigate} />;
      case 'productsw':
        return <ProductSoftwarePackScreen navigate={navigate} />
      case 'applicationtest':
        return <ApplicationTestScreen navigate={navigate}/>
      case 'buildsw':
        return <BuildSoftworeDevScreen navigate={navigate}/>
      case 'datainput':
        return <DataInputScreen navigate={navigate} />
      case 'sqlapp':
        return <SqlApplicationScreen navigate={navigate} />
      case 'implement':
        return <ImplementScreen navigate={navigate} />
      case 'interfaceimpl':
        return <InterfaceImplScreen navigate={navigate} />
      case 'serverprogram':
        return <ServerProgramScreen navigate={navigate} />
      case 'wireframe':
        return <WireFrameScreen navigate={navigate} />
      case 'exam':
        return <ExamScreen navigate={navigate} />;
      default:
        return <HomeScreen navigate={navigate} />;
    }
  };

  const getBasePage = (page) => {
    if (page === 'study-detail') return 'study';
    return page;
  };

  const basePage = getBasePage(currentPage);

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
          padding: 40px 16px;
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
          margin: 0 0 40px 0;
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

        .lightgreen {
          background-color: rgba(160, 218, 25, 1);
        }

        .skyblue {
          background-color: rgba(41, 200, 206, 1);
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

        .progress-text a {
          text-decoration: none;
          color: #1e40af;
        }

        .progress-text a:hover {
          text-decoration: underline;          
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

      <div className="app-container">
        <div className="screen-content">
          {renderPage()}
        </div>

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
      </div>
    </>
  );
}

// 홈 화면
function HomeScreen({ navigate }) {
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

// 공부 자료 목록 화면
function StudyMaterialScreen({ navigate }) {
  const materials = [
    { id: 1, title: '요구사항 확인', description: '지필평가', navigate: 'requirements' },
    { id: 2, title: '제품소프트웨어 패키징', description: '지필평가', navigate: 'productsw' },
    { id: 3, title: '애플리케이션 테스트 관리', description: '지필평가', navigate: 'applicationtest' },
    { id: 4, title: '소프트웨어 개발 보안 구축', description: '지필평가', navigate: 'buildsw' },
    { id: 5, title: '데이터 입출력 구현', description: '작업평가 - 제1과제(데이터베이스구현 실무)', navigate: 'datainput' },
    { id: 6, title: 'SQL 응용', description: '작업평가 - 제1과제(데이터베이스구현 실무)', navigate: 'sqlapp' },
    { id: 7, title: '통합구현', description: '작업평가 - 제2과제(인터페이스구현 실무)', navigate: 'implement' },
    { id: 8, title: '인터페이스 구현', description: '작업평가 - 제2과제(인터페이스구현 실무)', navigate: 'interfaceimpl' },
    { id: 9, title: '서버프로그램 구현', description: '작업평가 - 제3과제(서버프로그램 개발 실무)', navigate: 'serverprogram' },
    { id: 10, title: '화면설계 구현', description: '작업평가 - 제4과제(화면설계 실무)', navigate: 'wireframe' },
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
            onClick={() => navigate(material.navigate)}
          >
            <div className="list-item-left">
              <div className={material.id <= 4 ? "list-avatar skyblue" : "list-avatar lightgreen"}>{material.id}</div>
              <div className="list-info">
                <h3>{material.title}</h3>
                <p>{material.description}</p>
              </div>
            </div>
            <ChevronRight size={20} className="list-arrow" />
          </div>
        ))}
      </div>
    </>
  );
}

// 과목 상세 화면
function RequirementsScreen({ navigate }) {
  return (
    <>
      <div className="header">
        <div className="detail-header">
          <button className="back-button" onClick={() => navigate('study')}>
            <ArrowLeft size={20} />
          </button>
          <h1>요구사항 확인</h1>
          <div style={{ width: '60px' }}></div>
        </div>
      </div>

      <div className="progress-section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="progress-text">파일 다운로드</span>
          <span className="progress-text"><a href="/ncs/LM2001020201_요구사항확인.pdf" download="LM2001020201_요구사항확인.pdf">다운로드</a></span>
        </div>    
      </div>

      <div className="chapter-list">
        
      </div>
    </>
  );
}

function ProductSoftwarePackScreen({ navigate }) {
  return (
    <>
      <div className="header">
        <div className="detail-header">
          <button className="back-button" onClick={() => navigate('study')}>
            <ArrowLeft size={20} />
          </button>
          <h1>제품소프트웨어 패키징</h1>
          <div style={{ width: '60px' }}></div>
        </div>
      </div>

      <div className="progress-section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="progress-text">파일 다운로드</span>
          <span className="progress-text"><a href="/ncs/LM2001020209_제품소프트웨어패키징.pdf" download="LM2001020209_제품소프트웨어패키징.pdf">다운로드</a></span>
        </div>    
      </div>

      <div className="chapter-list">
        
      </div>
    </>
  );
}

function ApplicationTestScreen({ navigate }) {
  return (
    <>
      <div className="header">
        <div className="detail-header">
          <button className="back-button" onClick={() => navigate('study')}>
            <ArrowLeft size={20} />
          </button>
          <h1>애플리케이션 테스트 관리</h1>
          <div style={{ width: '60px' }}></div>
        </div>
      </div>

      <div className="progress-section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="progress-text">파일 다운로드</span>
          <span className="progress-text"><a href="/ncs/LM2001020226_애플리케이션테스트관리.pdf" download="LM2001020226_애플리케이션테스트관리.pdf">다운로드</a></span>
        </div>    
      </div>

      <div className="chapter-list">
        
      </div>
    </>
  );
}

function BuildSoftworeDevScreen({ navigate }) {
  return (
    <>
      <div className="header">
        <div className="detail-header">
          <button className="back-button" onClick={() => navigate('study')}>
            <ArrowLeft size={20} />
          </button>
          <h1>소프트웨어 개발 보안 구축</h1>
          <div style={{ width: '60px' }}></div>
        </div>
      </div>

      <div className="progress-section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="progress-text">파일 다운로드</span>
          <span className="progress-text"><a href="/ncs/LM2001020611_19v5_SW개발보안구축.pdf" download="LM2001020611_SW개발보안구축.pdf">다운로드</a></span>
        </div>    
      </div>

      <div className="chapter-list">
        
      </div>
    </>
  );
}

function DataInputScreen({ navigate }) {
  return (
    <>
      <div className="header">
        <div className="detail-header">
          <button className="back-button" onClick={() => navigate('study')}>
            <ArrowLeft size={20} />
          </button>
          <h1>데이터 입출력 구현</h1>
          <div style={{ width: '60px' }}></div>
        </div>
      </div>

      <div className="progress-section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="progress-text">파일 다운로드</span>
          <span className="progress-text"><a href="/ncs/LM2001020205_데이터입출력구현.pdf" download="LM2001020205_데이터입출력구현.pdf">다운로드</a></span>
        </div>    
      </div>

      <div className="chapter-list">
        
      </div>
    </>
  );
}

function SqlApplicationScreen({ navigate }) {
  return (
    <>
      <div className="header">
        <div className="detail-header">
          <button className="back-button" onClick={() => navigate('study')}>
            <ArrowLeft size={20} />
          </button>
          <h1>SQL응용</h1>
          <div style={{ width: '60px' }}></div>
        </div>
      </div>

      <div className="progress-section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="progress-text">파일 다운로드</span>
          <span className="progress-text"><a href="/ncs/LM2001020414_SQL응용.pdf" download="LM2001020414_SQL응용.pdf">다운로드</a></span>
        </div>    
      </div>

      <div className="chapter-list">
        
      </div>
    </>
  );
}

function ImplementScreen({ navigate }) {
  return (
    <>
      <div className="header">
        <div className="detail-header">
          <button className="back-button" onClick={() => navigate('study')}>
            <ArrowLeft size={20} />
          </button>
          <h1>통합구현</h1>
          <div style={{ width: '60px' }}></div>
        </div>
      </div>

      <div className="progress-section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="progress-text">파일 다운로드</span>
          <span className="progress-text"><a href="/ncs/LM2001020206_통합구현.pdf" download="LM2001020206_통합구현.pdf">다운로드</a></span>
        </div>    
      </div>

      <div className="chapter-list">
        
      </div>
    </>
  );
}

function InterfaceImplScreen({ navigate }) {
  return (
    <>
      <div className="header">
        <div className="detail-header">
          <button className="back-button" onClick={() => navigate('study')}>
            <ArrowLeft size={20} />
          </button>
          <h1>인터페이스 구현</h1>
          <div style={{ width: '60px' }}></div>
        </div>
      </div>

      <div className="progress-section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="progress-text">파일 다운로드</span>
          <span className="progress-text"><a href="/ncs/LM2001020212_인터페이스구현.pdf" download="LM2001020212_인터페이스구현.pdf">다운로드</a></span>
        </div>    
      </div>

      <div className="chapter-list">
        
      </div>
    </>
  );
}

function ServerProgramScreen({ navigate }) {
  return (
    <>
      <div className="header">
        <div className="detail-header">
          <button className="back-button" onClick={() => navigate('study')}>
            <ArrowLeft size={20} />
          </button>
          <h1>서버프로그램 구현</h1>
          <div style={{ width: '60px' }}></div>
        </div>
      </div>

      <div className="progress-section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="progress-text">파일 다운로드</span>
          <span className="progress-text"><a href="/ncs/LM2001020211_서버프로그램구현.pdf" download="LM2001020211_서버프로그램구현.pdf">다운로드</a></span>
        </div>    
      </div>

      <div className="chapter-list">
        
      </div>
    </>
  );
}

function WireFrameScreen({ navigate }) {
  return (
    <>
      <div className="header">
        <div className="detail-header">
          <button className="back-button" onClick={() => navigate('study')}>
            <ArrowLeft size={20} />
          </button>
          <h1>화면설계</h1>
          <div style={{ width: '60px' }}></div>
        </div>
      </div>

      <div className="progress-section">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span className="progress-text">파일 다운로드</span>
          <span className="progress-text"><a href="/ncs/LM2001020224_화면설계.pdf" download="LM2001020224_화면설계.pdf">다운로드</a></span>
        </div>    
      </div>

      <div className="chapter-list">
        
      </div>
    </>
  );
}

// 시험 문제 화면
function ExamScreen({ navigate }) {
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
    </>
  );
}