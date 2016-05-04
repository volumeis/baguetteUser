package com.model2.mvc.service.domain;

//==>회원정보를 모델링(추상화/캡슐화)한 Bean
public class Store {
	
	///Field
	private int storeNo; 		//등록번호
	private String storeName; 	//상호
	private String storeAddr;	//주소
	private String storeTel;	//전화번호
	private String storeTime;	//운영시간
	private String storeImg;	//사진
	private String storeInfo;	//가게정보
	private double storeLat;	//위도
	private double storeLng;	//경도
	
	public Store() {
	}

	public int getStoreNo() {
		return storeNo;
	}

	public void setStoreNo(int storeNo) {
		this.storeNo = storeNo;
	}

	public String getStoreName() {
		return storeName;
	}

	public void setStoreName(String storeName) {
		this.storeName = storeName;
	}

	public String getStoreAddr() {
		return storeAddr;
	}

	public void setStoreAddr(String storeAddr) {
		this.storeAddr = storeAddr;
	}

	public String getStoreTel() {
		return storeTel;
	}

	public void setStoreTel(String storeTel) {
		this.storeTel = storeTel;
	}

	public String getStoreTime() {
		return storeTime;
	}

	public void setStoreTime(String storeTime) {
		this.storeTime = storeTime;
	}

	public String getStoreImg() {
		return storeImg;
	}

	public void setStoreImg(String storeImg) {
		this.storeImg = storeImg;
	}

	public String getStoreInfo() {
		return storeInfo;
	}

	public void setStoreInfo(String storeInfo) {
		this.storeInfo = storeInfo;
	}

	public double getStoreLat() {
		return storeLat;
	}

	public void setStoreLat(double storeLat) {
		this.storeLat = storeLat;
	}

	public double getStoreLng() {
		return storeLng;
	}

	public void setStoreLng(double storeLng) {
		this.storeLng = storeLng;
	}

	@Override
	public String toString() {
		return "Store [storeNo=" + storeNo + ", storeName=" + storeName + ", storeAddr=" + storeAddr + ", storeTel="
				+ storeTel + ", storeTime=" + storeTime + ", storeImg=" + storeImg + ", storeInfo=" + storeInfo
				+ ", storeLat=" + storeLat + ", storeLng=" + storeLng + "]";
	}


}