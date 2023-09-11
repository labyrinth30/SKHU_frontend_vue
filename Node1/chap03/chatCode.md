컴퓨터 내부에서 문자는 이진수 숫자 형태로 저장된다.  
따라서 컴퓨터에 저장될 수 있는 모든 문자에는, 그 문자를 저장하기 위한 숫자가 지정되어 있다. 
각각의 문자에 숫자를 지정하는 방식을 문자 인코딩(character encoding) 이라고 한다.   
(character => 문자, encoding => 이진수 코드화 한다)  
여러 종류의 문자 인코딩이 있다. (예: Unicode, UTF-8, EUC-KR, ASCII, CP949 ...)  
Java는 Unicode 문자 인코딩을 사용한다.  
문자에 지정된 숫자를 문자 코드라고 한다.  
charAtCode 메소드는, 지정된 위치의 문자의 Unicode 값을 리턴한다.  