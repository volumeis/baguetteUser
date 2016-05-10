package com.model2.mvc.common.aspect;

import org.aspectj.lang.ProceedingJoinPoint;


public class LogAspectJ {

	///Constructor
	public LogAspectJ() {
		System.out.println("\nCommon :: "+this.getClass()+"\n");
	}
	public static int LOGGED_NO = 0;
	
	//Around  Advice
	public Object invoke(ProceedingJoinPoint joinPoint) throws Throwable {
			
		System.out.println("---LOGGING NO : " + LOGGED_NO++ + "--- --- --- --- --- --- ");
		System.out.println("[Around before]"+ joinPoint.getTarget().getClass().getName() +"."+	joinPoint.getSignature().getName());
		if(joinPoint.getArgs().length !=0){
			System.out.println("[Around before]"+ joinPoint.getArgs()[0]);
		}
		Object obj = joinPoint.proceed();

		System.out.println("[Around after]"+obj);
		System.out.println("");
		
		return obj;
	}
	
}//end of class