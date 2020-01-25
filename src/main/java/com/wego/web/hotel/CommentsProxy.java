package com.wego.web.hotel;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import lombok.Data;
@Data
@Component
public class CommentsProxy {
	@Autowired HotelMapper hotelMapper;
	
    public List<String> UseridList() {

        List<String> uids = Arrays.asList("agewf5", "bsqwr", "cgsdgf", "dqetsd", "egsqdf", "fdqdf", "gdsfds", "hhjrdf", "ssdfi", "ddgwj", "kgrsd", "sdfwe11", "sdgd2", "sdgds4", "sdgsd1",
                  "kkdmwo99", "vkske04", "rqeeru", "ssdgme", "tkkfw31", "ummd12","dkdkfl193");
        Collections.shuffle(uids);
       return uids;
   }
    
	public List<Double> ratingList(){
		List<Double> rating = Arrays.asList(8.6,5.4,8.6,8.0,6.4,9.4,5.2,8.0,4.0,5.5,9.2,9.2,7.0,7.2,6.4,7.6,5.4,5.5);
		
		return rating;
		
	}
	
	public List<String> commentsList(){
		List<String> comments = Arrays.asList("강아지데리고가서 해먹으면서 놀기에는 최고에요. 룸컨디션도 나쁘지않고, 스텝들도 엄청친절해요",
				"반려동물과 함께 가족 숙박으로 좋은 선택이었어요.",
				"깨끗하고 필요한거 원하는거 빠르게 해결해줌",
				"가성비 대비 방싸이즈 주방 세탁기구비 등등 만족하고 특히 투숙객 사우나 무료이용이 출장객한테는 하루 피로를 풀수있는 좋은 기회인거 같습니다",
				"깨끗하고 안락한 숙박시설",
				"합리적이며 편안한 숙박지이었어요... 사우나가 있어서 합리적인 숙박지로 이용을 하고있음",
				"깔끔한 객실과 친절한 서비스",
				"편의시설이 잘 되어있고 숙소 또한 깨끗하고 편리하게 이용할 수있도록 되어있었어요...그리고 직원분들이 친절하셨어요^^!!",
				"방은 넓고 쾌적하였습니다",
				"넓고 좋았어요 치약이 부족했던 점 제외하고는 괜찮았아요","시설이 낡은거 외엔 다 편리합니다. 가격대비 가성비 좋아요",
				"셀수없을정도로 자주 이용하는 곳입니다. 이번에도 전반적으로 전부 만족스러웠습니다",
				"다들 너무 좋다고 겨울오기전에 또 가기로 했어요",
				"제가 약간 귀찮은 요구를 했었는데도 친절하게 응대해 주셔서 너무 감사했습니다","좋아요",
				"위치가 너무너무 좋지만.. 커피포트 같은 건 관리가 됐으면 좋겠어요","고양이, 강아지 데리고 놀러갔는데 좋았어요",
				"반려동물과 함께 자주 찾는 곳이고, 앞으로 더 자주 찾을 것 같아요.");

		
		return comments;
		
	}
	 public List<Comments> CommentsDB() {
		 Comments Comments= null;
		 List<Comments> CommentsList = new ArrayList<>();
		 for(int i = 0 ; i<commentsList().size();i++) {
			 Comments = new Comments(commentsList().get(i),UseridList().get(i),ratingList().get(i));
			 CommentsList.add(Comments);
			
		 }
		 
	  return CommentsList;
	 }
	 
		@Transactional
		public void insertCommentsDB() {
			 List<Comments> cList = CommentsDB();
			for(int i=0;i<cList.size();i++) {
				hotelMapper.insertComments(cList.get(i));
			}
		
		}
}
