import React from 'react';
import { Link } from 'react-router-dom';
import './RegisterWalkPage.css'; // Import the CSS file
import logo from './images/logo.PNG'; // Import the logo image

const RegisterWalkPage = () => {
  return (
    <div className="register-walk-page">
      <header className="header">
        <Link to="/" className="logo">
          <img src={logo} alt="MyWay Logo" />
        </Link>
        <nav>
          <ul className="nav-links">
            <li><Link to="/walks">산책로</Link></li>
            <li><Link to="/community">커뮤니티</Link></li>
          </ul>
        </nav>
        <button className="mypage-button">마이페이지</button>
      </header>
      <div className="content">
        <h1>MyWay 산책로 등록 서비스</h1>
        <p>
          MyWay 산책로 등록 서비스는 사용자가 직접 산책로를 등록하고 공유할 수 있는 서비스입니다. 
          여러분이 알고 있는 아름다운 산책로를 다른 사용자들과 공유해보세요!
        </p>
        <h2>서비스 특징</h2>
        <ul>
          <li>간편한 등록 절차</li>
          <li>다양한 산책로 정보 제공</li>
          <li>커뮤니티를 통한 소통</li>
          <li>지도 기반의 산책로 검색 기능</li>
        </ul>
        <h2>사용 방법</h2>
        <ol>
          <li>로그인 후 마이페이지에서 산책로 등록 버튼 클릭</li>
          <li>산책로 정보 입력 (이름, 위치, 특징 등)</li>
          <li>사진 업로드 및 상세 설명 작성</li>
          <li>등록 완료 후 다른 사용자들과 공유</li>
        </ol>
        <Link to="/register-walk">
          <button className="register-button">산책로 등록하기</button>
        </Link>
      </div>
      <footer className="footer">
        <div className="footer-links">
          <div className="footer-column">
            <h3>MyWay</h3>
            <ul>
              <li><a href="/Register">MyWay 소개</a></li>
              <li><a href="https://instagram.com/takkk_2">MyWay Instagram</a></li>
              <li><a href="https://youtube.com">MyWay Youtube</a></li>
              <li><a href="#!">MyWay Producer</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>주요서비스</h3>
            <ul>
              <li><a href="#!">산책로</a></li>
              <li><Link to="/community">커뮤니티</Link></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>제휴업체</h3>
            <ul>
              <li><a href="https://code01cafe.modoo.at/">코드 0.1</a></li>
              <li><a href="https://www.siksinhot.com/P/1312124">킁킁분식</a></li>
              <li><a href="https://map.naver.com/p/search/%EC%95%8C%ED%94%84%EC%8A%A4%EB%8B%B9%EA%B5%AC%EC%9E%A5/place/17301667?placePath=?entry=pll&from=nx&fromNxList=true&searchType=place">알프스당구장</a></li>
              <li><a href="https://map.naver.com/p/entry/place/17030596?lng=127.48645&lat=34.969181&placePath=%2Fhome&entry=plt&searchType=place">춘천거시기닭갈비</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>지원 및 서비스</h3>
            <ul>
              <li><a href="/community">공지사항</a></li>
              <li><a href="#!">고객센터</a></li>
              <li><a href="#!">자주 묻는 질문</a></li>
              <li><a href="#!">광고문의</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h3>개인정보처리방침</h3>
            <ul>
              <li><a href="#!">이용약관</a></li>
              <li><a href="#!">위치기반 서비스 이용약관</a></li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          &copy; LIKELION UNIV. SCNU 12TH 워크홀릭
        </div>
      </footer>
    </div>
  );
}

export default RegisterWalkPage;
