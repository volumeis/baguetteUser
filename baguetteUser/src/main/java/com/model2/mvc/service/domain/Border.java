package com.model2.mvc.service.domain;

import java.util.Date;

//==>빵정보 모델링(추상화/캡슐화)한 Bean
public class Border {
	
	///Field
	private int oqty;// 빵 기본키
	private int ono;	// 빵 이름
	private String otran;		// 빵 가격
	private Date odate;	// 빵 설명
	private int bno;	// 빵 이미지주소
	private int cno;			// 빵 남은 수량
	private String or_chk;	// 스토어 사업자번호
	
	public Border() {
	}

	public int getOqty() {
		return oqty;
	}

	public void setOqty(int oqty) {
		this.oqty = oqty;
	}

	public int getOno() {
		return ono;
	}

	public void setOno(int ono) {
		this.ono = ono;
	}

	public String getOtran() {
		return otran;
	}

	public void setOtran(String otran) {
		this.otran = otran;
	}

	public Date getOdate() {
		return odate;
	}

	public void setOdate(Date odate) {
		this.odate = odate;
	}

	public int getBno() {
		return bno;
	}

	public void setBno(int bno) {
		this.bno = bno;
	}

	public int getCno() {
		return cno;
	}

	public void setCno(int cno) {
		this.cno = cno;
	}

	public String getOr_chk() {
		return or_chk;
	}

	public void setOr_chk(String or_chk) {
		this.or_chk = or_chk;
	}

	@Override
	public String toString() {
		return "Border [oqty=" + oqty + ", ono=" + ono + ", otran=" + otran + ", odate=" + odate + ", bno=" + bno
				+ ", cno=" + cno + ", or_chk=" + or_chk + "]";
	}
}