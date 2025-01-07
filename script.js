
let currentPath = "start";
let playerName = "아카리";

let dialogueData = {
    "start": {
        "text": "하루마사: 자...잠깐만요...? 아카리 씨...?\n아카리: 으,으악...! 그....그러니까....! 이게 무슨...?",
        "choices": {
            "몸을 뒤로 뺀다": "2",
            "밀쳐낸다": "3",
            "모르겠어!": "4"
        }
    },
    "2": {
        "text": "아카리:죄, 죄송해요...! 일단 제가 최대한 뒤로 가 볼게요...!\n하루마사:괘, 괜찮아요, 그쪽에 자리도 없어 보이는데....\n아카리:그, 그렇지만요! 괜히 제게 깔려서 다치시면 어떡해요.\n하루마사:거봐요... 이게 최선이라니까요.\n아카리:윽...\n하루마사:후우... 어쩌다 이런 데 갇혀버린 걸까요?\n아카리:저...저도 기억나는 게 없어서...\n하루마사: ...정말이네요. 누군가 머리의 한 부분을 도려낸 것처럼...\n아카리: 애초에 이런 데에 어떻게 가둔 건지...\n하루마사: ...뭔가 이상하지만...\n하루마사: 일단 여기서 나가는 걸 우선으로 하죠.\n아카리: 네!\n하루마사: 일단... 윽... 머리도 안 돌아가네요.\n아카리:  으음... \n(하루마사의 체온이 그대로 전해져 온다.)",
        "choices": {
            "추워서 죽을 일은 없겠네요": "2_1",
            "하루 씨, 따뜻하네요.": "2_2"
        }
    },
    "2_1": {
        "text": "하루마사: 그, 그런 것보다... 일단 나갈 방법을 찾아봐야죠...\n아카리: 아, 그러네요... 배고파 죽을 수도 있으니...\n(하루마사의 얼굴이 살짝 붉어졌다.)\n하루마사: 괜히 힘 빼지 말고... 어차피 힘쓸 데도 없긴 하지만요...\n하루마사: 구조되길 기다리는 건 힘들겠죠.\n아카리: 아무래도요... 애초에, 여기가 어딘지도 모르니...\n하루마사: 윽... 그러네요.",
        "choices": {
            "일단...여기가 어딜 지 추측해보죠.": "2_21",
            "일단...어쩌다 갇힌 건지 생각해보죠.": "2_22"
        }
    },
    "2_2": {
        "text": "하루마사: 아무래도 살아 있으니... 따뜻한 편이겠죠.\n아: 그...그런가... 살아 있다라... 아픈 데는 없으세요?\n하루마사: 괜찮아요... 지금은.\n아카리: 여기 더 있다간 무슨 일이 생길지 모르니...\n아카리: 빨리 어떻게든 나갈 방법을 찾아봐야겠죠.\n하루마사: 하아, 여기ㅡ 나갈 수 있긴 한가...",
        "choices": {
            "벌써 포기하시면 안 되죠": "2_3",
            "아침 안 드셨어요?": "2_4"
        }
    },
    "2_3": {
        "text": "하루마사: 아직 포기는 안 했다고요.\n하루마사: 저는 끝까지 살아남을 거니까.\n아카리: 이제야 좀 하루 씨 답네요.\n아카리: 그나저나, 이 벽 아무리 밀어도 꿈쩍도 안 하는데요...\n하루마사: 애초에 어떻게 가둬진 건지...\n아카리: 일종의 공동 같은 건가...\n하루마사: 그건 그것대로 끔찍하네요.\n하루마사: 그런데, 이런 식으로 나타나기도 하던가?\n아카리: 저야, 잘 모르죠?\n하루마사: 그런가요...\n아카리: 어쨌든... 나갈 방법을 찾아내야죠.\n하루마사: 알고, 있다고요. 끙...\n아카리: 안 밀려요? \n하루마사: 그러네요...",
        "choices": {
            "다른 방법이 있는 거 아닐까요?": "",
            "흠...": ""
        }
    },
    "2_4": {
        "text": "하루마사: 아, 아침이랑은 무슨 상관이죠...\n아카리: 아침을 안 먹으면 힘을 못 쓰잖아요.\n하루마사: 힘이라...\n하루마사: 이 벽, 밀리긴 하는 걸까요?\n아카리: 글쎼요, 꿈쩍도 안 하는데...\n하루마사: 애초에 이런 데에 어떻게 가둔 건지도...\n아카리: 일종의 새로운 함정?\n하루마사: 그건 아닌 것 같은데요...",
        "choices": {
            "생각해 보자...": "2_5",
            "하루마사가 걱정된다.": "2_6"
        }
    },
    "2_5": {
        "text": "아카리: 으음... \n하루마사: ...\n아카리: 역시 모르겠네...\n하루마사: 아,아카리 씨...? \n아카리: 네?\n아카리: 아...!\n(어느새 하루마사의 얼굴을 빤히 쳐다보고 있었다.)\n하루마사: 그렇게 빤히 쳐다보시면 말이죠...\n하루마사: 부끄럽다고요.\n아카리: 아, 앗...! 죄송해요!\n(얼굴이 달아오르는 것을 느꼈다.)\n하루마사: 하하...사과하실 필요는 없어요.\n아카리: ...\n(그렇게 말하는 하루마사를 보곤....)",
        "choices": {
            "얼굴이 완전 새빨간데요?": "2_7",
            "알겠어요, 이제 안 볼게요.": "2_8"
        }
    },
    "2_6": {
        "text": "아카리: 하루 씨... 음... 그러니까.\n하루마사: 으음~ 뭔가요? 뭐라도 떠오르신 걸까요?\n아카리: 그냥... 하루 씨가 걱정되네요.\n아카리: 아, 저는 아무렇지도 않아요.\n하루마사: 그러니까 아픈 덴 없냐는 거죠?\n하루마사: 그건 걱정 마세요.\n아카리: 그럼 다행이고요.\n하루마사: 그런데... 정말 아무렇지도 않다고요?\n(하루마사가 무슨 말을 하는지 알 것 같다.)",
        "choices": {
            "그럼... 한번 실험해 보실래요?": "2_13",
            "흠... 역시 신경 쓰고 계신 거죠?": "2_14"
        }
    },
    "2_7": {
        "text": "아카리: 많이 부끄러우셨나~?\n하루마사: 오늘따라 짓궃으시네요...\n하루마사: 으...놀리지 말라고요.\n아카리: 아하하, 저도 모르게 그만...\n하루마사: 여, 여기서 나갈 방법이나 생각해 봐야죠.\n아카리: 아 , 맞다! 그걸 생각하고 있었는데.\n하루마사: 뭐...라도 떠오르셨나요?\n(하루마사를 빤히 쳐다본다.)",
        "choices": {
            "오늘따라 감정표현이 풍부하신데요.": "2_9",
            "음, 글쎼요. 딱히...": "2_10"
        }
    },
    "2_8": {
        "text": "아카리: 뭐 이 좁은 데서 시선 둘 데도 없긴 한데...\n하루마사: 그건... 그렇죠.\n하루마사: 후아, 덥네요... \n아카리: 혹시 답답하세요?\n아카리: 아니면 어디 불편하신 데라도...?\n하루마사: 아,아니... 괜찮...\n(눈이 마주쳤다.)\n아카리: .....\n아카리: 하루 씨 오늘따라 뭔가 이상하시네요...\n아카리: 진짜 어디 아프신 건 아니죠?\n하루마사: .....\n아카리: 어쩐지 조금 몸이 뜨거운 것 같기도 하고...\n아카리: 잠시, 실례할게요.",
        "choices": {
            "이마를 살짝 맞대어 본다": "2_11",
            "목 부근에 귀를 가져다 댄다": "2_12"
        }
    },
    "2_9": {
        "text": "",
        "choices": {
            "": "",
            "": ""
        }
    },
    "2_10": {
        "text": "하루마사: 그건 아쉽게 됐네요.\n아카리: 어떡할까요...\n하루마사: 아무래도 방법이 떠오르질 않으니...\n하루마사: 이 벽은 밀리지도 않고요.\n아카리: 그러게 말이죠...\n하루마사: 이대로 기다려야 하는 걸까요.\n아카리: 언제 열린다는 보장이 없잖아요.\n하루마사: 그건, 그렇지만.",
        "choices": {
            "": "",
            "": ""
        }
    },

    "2_11": {
        "text": "(상체를 살짝 움직여 이마를 맞대었다.)\n하루마사: ...!\n아카리: 여, 열이 있으신 것 같은데?\n아카리: 괜찮으신 거 맞아요?\n하루마사: 걱정 마세요...\n아카리: 어떻게 걱정을 안 해요!\n하루마사: ......\n아카리: 빨리 나가서 치료를...\n하루마사: 괜찮다니까요.\n아카리: 하루 씨?",
        "choices": {
            "": "",
            "": ""
        }
    },
    "2_12": {
        "text": "(두근거리는 소리가 크게 울려 온다.)",
        "choices": {
            "": "",
            "": ""
        }
    },
    "2_13": {
        "text": "하루마사: 실험이라뇨.\n하루마사: 무슨...?\n아카리: 그, 그러니까...!\n(얼굴이 달아오르는 것이 느껴진다...)\n(이렇게 된 거...)",
        "choices": {
            "지,진짜 아무렇지도 않은지 보자고요.": "2_15",
            "...아무것도 아니에요.": "2_20"
        }
    },
    "2_14": {
        "text": "",
        "choices": {
            "": "",
            "": ""
        }
    },
    "2_15": {
        "text": "(...라고 말해버렸다...)\n하루마사: ...이런 건...\n하루마사: 무르기 없는 겁니다?\n아카리: 당연하죠.\n(꿀꺽...)\n(어떻게 할까?)",
        "choices": {
            "키스한다": "2_16",
            "가볍게 볼에 입맞춤을 한다": "2_17"
        }
    },
    "2_16": {
        "text": "(팔로 하루마사의 목을 가볍게 끌어안고...)\n(천천히 눈을 감으며 조심스럽게 입을 맞췄다.)\n(하루마사의 당황한 듯한 몸짓이 느껴진다.)\n(하지만 곧 부드럽게 응해 온다.)\n(......)\n(....)\n(&gt;_&lt;...)\n(눈을 뜨고 바라본 하루마사의 모습은...)",
        "choices": {
            "아핫...귀여우시네요.": "2_18",
            "거봐요.": "2_19"
        }
    },
    "2_17": {
        "text": "(상체를 부드럽게 숙여...)\n(하루마사의 볼에 살짝 입을 맞추었다)\n(....)\n아카리: 어때요, 제가 이겼죠?\n하루마사: ...내기를 한 적은 없는 것 같은데요...\n하루마사: 그리고 아카리 씨... 얼굴이 상당히 빨갛다고요.\n아카리: 윽... 하루 씨도 마찬가지거든요!\n하루마사: 하하...그런가...\n아카리: 여기서 나가게 되면 두고 보세요.\n하루마사: 뭘요? 그땐 제대로 해 주시는 건가요?\n아카리: 제대로라니, 그게 무슨 소리에요!\n(밝게 웃는 하루마사를 보며 미소를 지었다.)",
        "choices": {
            "": "",
            "": ""
        }
    },
    "2_18": {
        "text": "하루마사: 아니, 아무리 그래도....\n아카리: 왜요? \n하루마사: 윽... 그 표정은 대체 뭔데요...\n아카리: 그야, 하루 씨의 이런 모습, 귀한걸요.\n하루마사: 아무래도 이 공간이 이상한 것 같...\n아카리: 뭐 어떤가요.\n하루마사: 그..그런가...",
        "choices": {
            "": "",
            "": ""
        }
    },
    "2_19": {
        "text": "하루마사: 거봐요, 라니...\n아카리: 으음~\n하루마사: 모,모르는 척 하시긴.\n아카리: 어쨌든, 나쁘지만은 않은 것 같은데요.",
        "choices": {
            "": "",
            "": ""
        }
    },
    "2_20": {
        "text": "하루마사: 어차피 이렇게 된 거...\n하루마사: 그냥 말해주세요.\n아카리: 듣고 싶은 말이라도 있나 봐요?\n하루마사: 이 공간은 저희뿐이니까요.",
        "choices": {
            "": "",
            "": ""
        }
    },
    "2_21": {
        "text": "",
        "choices": {
            "": "",
            "": ""
        }
    },
    "2_22": {
        "text": "",
        "choices": {
            "": "",
            "": ""
        }
    },
    "3": {
        "text": "하루마사:윽, 머리야....\n아카리:괘, 괜찮으세요?",
        "choices": {
            "괜히 제가 밀쳐서...": "3_1",
            "죄송해요!": "3_2"
        }
    },
    "3_1": {
        "text": "하루마사: 아, 아니에요... 여기 좁아서 부딪힐 데도 없는걸요.\n아카리: 그, 그렇다면 다행이지만...\n아카리:아, 아니, 다행이 아니지. 여기서 나갈 방법을 찾아봐야겠죠.\n하루마사: 아무래도 그렇죠.\n아카리: 으음... 여긴 대체 어딜까요...\n하루마사: 그러게요- 전혀 짐작이 안 가는데-",
        "choices": {
            "으-음, 어쩌면...": "3_3",
            "이 벽, 서로 가까워지거나 하진 않겠죠?": "3_4"
        }
    },
    "3_2": {
        "text": "하루마사: 사과할 필요 없다고요, 괜찮으니까.\n하루마사: 그보다...\n하루마사: 아카리 씨는 괜찮으신가요?\n아카리: 저는 멀쩡해요.\n아카리: 오히려 하루 씨가 더 걱정되는걸요.\n하루마사: 전 멀쩡합니다.",
        "choices": {
            "": "",
            "": ""
        }
    },
    "3_3": {
        "text": "하루마사: 뭔가 떠오르는 거라도 있나요?\n아카리: 일종의... 공동 같은 거죠.\n하루마사: 그런 무서운 소리는 말아주세요.\n아카리: 그렇지만 이런 공간이 갑자기 생길 리가 없잖아요?\n하루마사: 아니, 가능성이 있기도 하지만...\n하루마사: 확실히 그런 쪽이려나...\n아카리: 그럼 언젠가는 나갈 수 있지 않을까요.\n하루마사: 그 언젠가가 언제인지 모른다는 게 문제죠.\n아카리: 역시, 그런 거려나...\n하루마사: 일단 최대한 머리를 굴려 봐야 한다고요.",
        "choices": {
            "하지만 아무리 생각해도...": "3_5",
            "하루 씨는 어떻게 생각하세요?": "3_6"
        }
    },
    "3_4": {
        "text": "하루마사: 으,으... 농담으로라도 그런 끔찍한 소리는 하지 말아 주세요.\n아카리: 상상만 해도 무섭긴 하네요. ...\n하루마사: 그보단...\n하루마사: 그게 진짜라면 어떻게 나갈 수 있을런지...\n아카리: 뭔가 힌트가 있을 거에요. \n하루마사: ...\n아카리: 하루 씨... 무슨 생각 하고 계세요?\n하루마사: 아카리 씨... 저 몸이 좀 안 좋은데요.\n아카리: 네? 어...어떡하죠...!\n하루마사: 진정해주세요.\n아카리: 대체 뭘 하시려고...\n(하루마사는 고개를 기울여 아카리를 바라본다.)",
        "choices": {
            "": "",
            "": ""
        }
    },
    "3_5": {
        "text": "하루마사: 후아... 어쩌다 이렇게 되버린건지...\n아카리: 걱정 마세요. 나갈 수 있을 거에요.\n하루마사: 저도 벌써 포기하진 않았다고요.\n아카리: 뭐 가진 거 없으신가요?\n하루마사: 가진 거라... 딱히 쓸만한 건 없는데 말이죠.\n아카리: 곤란하네요...\n아카리: 저도 딱히 가진 게 없어 보여서...\n아카리: 아...그런데...",
        "choices": {
            "좀 더 더워진 것 같지 않나요?": "3_7",
            "불편하진 않으세요?": "3_8"
        }
    },
    "3_6": {
        "text": "하루마사: 으음... 전 말이죠...\n하루마사: 글쎄요...\n하루마사: 역시 모르겠는걸요.\n아카리: 확실히 이런 공간은...\n아카리: 뭔가 떠올리기 쉽지 않긴 하죠.\n하루마사: 떠오르는 게 있긴 한데요.\n아카리: 그게 뭔가요?\n하루마사: 아카리 씨도 느끼고 계시잖아요?\n아카리: ...",
        "choices": {
            "": "",
            "": ""
        }
    },
    "3_7": {
        "text": "하루마사: 그런가요...\n하루마사: 이런 좁은 공간에 갇혀 있으니...\n하루마사: 어쩌면 당연한 일일지도요.\n아카리: 아, 그건 그렇네요.\n아카리: 그런데 공기뿐만 아니라...\n아카리: 하루 씨한테서도 좀 열이 나는 것 같은데요...\n아카리: 어디 아프신 덴 없죠?\n하루마사: 저야말로 묻고 싶은데요.\n아카리: 저는 괜찮아요! \n아카리: 단지... 하루 씨가 걱정돼서...\n하루마사: 그러니까 괜찮다니깐요.\n아카리: 하지만, 왠지 묘하게 불안해 보이시는데요.\n하루마사: 그건...\n아카리: 얼굴도 붉고... 으음...",
        "choices": {
            "하루마사의 가슴에 귀를 갖다댄다": "3_9",
            "하루마사와 눈을 맞춘다": "3_10"
        }
    },

    "3_8": {
        "text": "하루마사: 전 괜찮아요.\n아카리: 으음~\n하루마사: 사실 안 괜찮거든요.\n아카리: 그럴 줄 알았어요.\n하루마사: 짓궃으시긴.",
        "choices": {
            "": "",
            "": ""
        }
    },
    "3_9": {
        "text": "(조심스럽게 하루마사의 심장박동 소리에 귀를 기울인다.)\n아카리:...!\n아카리: 시, 심장이 엄청 빨리 뛰는데요.\n아카리: 전혀 안 괜찮은데요!\n하루마사: 그러니까 말이죠...\n하루마사: 하아...\n하루마사: 아카리 씨가 과하게 침착하신 것 같은데요.\n아카리: 으음... 많이 불안하신 건가...?\n하루마사: 그것도 그렇지만...\n하루마사: 이런 상황에서는...\n하루마사: 누구라도 당황하는 게 당연하지 않겠어요?\n아카리: ...\n(왠지 두근거림이 느껴진다...)\n아: 하루 씨, 혹시...",
        "choices": {
            "설레서 그렇다던가?": "3_11",
            "못 나갈까 봐 걱정되시는 건가요...": "3_12"
        }
    },
    "3_10": {
        "text": "하루마사: 그 눈빛은 뭐죠...\n아카리: 그냥, 하루 씨의 마음을 이제 좀 알 것 같아요.\n하루마사: 윽...",
        "choices": {
            "": "",
            "": ""
        }
    },
    "3_11": {
        "text": "하루마사: 그...그런 건...\n하루마사: 반칙이죠...\n(힘이 빠지는 게 느껴진다...)\n아카리: 뭐야, 그런 거였어요?\n아카리: 귀여운 면이 있으시네요.\n하루마사: 아카리 씨가 이상한 거거든요.\n하루마사: 끄응...\n아카리: 아뇨, 저도...",
        "choices": {
            "저도 좋은걸요?": "3_13",
            "전혀 침착한 거 아닌데.": "3_14"
        }
    },
    "3_12": {
        "text": "하루마사: 그런 것도 있죠...",
        "choices": {
            "": "",
            "": ""
        }
    },
    "3_13": {
        "text": "하루마사: ....\n아카리: 왜요, 저희 쌍방 아니에요?\n하루마사: 이런...",
        "choices": {
            "": "",
            "": ""
        }
    },
    "3_14": {
        "text": "하루마사: ...아카리 씨...\n하루마사: 오늘따라 좀...\n아카리: 좀, 뭐요?\n아카리: 애초에, 이런 데 갇혀 버렸으니까...\n하루마사: 그건 그런가요...\n하루마사: 굉장히 피곤한 곳인걸요, 여기...\n아카리: 후후...\n하루마사: 뭘 그렇게 의기양양하게 웃으시는 거죠.\n아카리: 아뇨, 그냥 좋아서.\n하루마사: 이거 꽤 귀찮게 되버렸네요...",
        "choices": {
            "": "",
            "": ""
        }
    },
    "4": {
        "text": "(머리가 빙 도는 것 같다.)\n하루마사: 아카리 씨, 괜찮으세요? 표정이 안 좋아 보이시는데.\n아카리: 괘, 괜찮아요! 잠시, 어지러워서...\n하루마사: 이런... 아카리 씨를 위해서라도 빨리 탈출해야겠네요.\n아카리: 그... 그런데 여긴 대체 어디지...?\n하루마사: 그러게요. 발 닿는 부분에 힘을 줘도 안 밀리고...\n아카리: 어쩌다 이런 데 들어오게 된걸까요...?\n하루마사: 으음... 전혀 모르겠네요. 짚이는 데가 없어요.\n아카리: 저도요.... 그...그런데...",
        "choices": {
            "저, 무겁지 않으세요?": "4_1",
            "불편하지 않으세요?": "4_2"
        }
    },
    "4_1": {
        "text": "하루마사: 무겁다뇨. 정말 가벼운데요.\n아카리: 거, 거짓말...\n하루마사: 진짠데. 그래도 제가 위에 있는 것보단 낫잖아요?\n아카리: 그, 그런가... 아니, 그렇지만...",
        "choices": {
            "": "",
            "": ""
        }
    },
    "4_2": {
        "text": "아카리: 그 자세... 허리가 굉장히 아플 것 같은데...\n하루마사: 그건 아카리 씨도 마찬가지잖아요? 이런 좁은 데에 짓눌려 있으면 어쩔 수 없으니까.\n아카리: 그래도 전 조금 나은 편이죠.\n하루마사: 아무래도, 오래 갇혀 있다간 위험하겠네요.\n아카리: 그런데... 어떻게 해야 좋을지...\n하루마사: 일단 최대한 방법을 찾아 보죠.",
        "choices": {
            "그보단... 괜찮으신 거 맞죠?": "4_3",
            "무리하지 마세요": "4_4"
        }
    },
    "4_3": {
        "text": "하루마사: 전 괜찮아요. \n아카리: 표정이 완전히 무리하고 계신 것 같은데.\n하루마사: 제 표정이 어때서요.",
        "choices": {
            "하루마사를 쳐다본다": "4_5",
            "웃는다": "4_6"
        }
    },
    "4_4": {
        "text": "하루마사: 무리라뇨... 대체 어디가 그렇게 보이는 거죠. \n아카리: 그야... 하루 씨 얼굴 엄청 빨간데요.\n하루마사: 들켜버렸네...",
        "choices": {
            "하루마사를 끌어안는다": "",
            "하루마사에게 입을 맞춘다": ""
        }
    },
    "4_5": {
        "text": "하루마사: 왜-왜 그렇게 쳐다보시는 거죠.\n아카리: 그냥요.\n(하루마사는 시선을 돌린다...)\n아카리: 오늘따라 솔직하지 못한 점도 귀여우시네요. \n하루마사: 그...그건 어쩔 수 없다고요.\n아카리: 왜요?\n하루마사: 그야, 아카리 씨를 좋아하고 있으니까.",
        "choices": {
            "저도 같은 마음이에요.": "",
            "하루마사를 끌어안는다": ""
        }
    },
    "4_6": {
        "text": "하루마사: 그 웃음은 대체 뭐죠...\n아카리: 오늘따라 귀여우신데요.\n하루마사: 뭔가요...\n하루마사: 원래 그런 성격 아니시잖아요.\n아카리: 여기 있다 보니... 묘하게.",
        "choices": {
            "하루 씨와 더 가까워질 수 있을 것 같아서?": "4_7",
            "감정이 달아올라서-": "4_8"
        }
    },
    "4_7": {
        "text": "하루마사: 흐음... 저희 이미 충분히 가까운 사이 아니었나요?\n아카리: 아닌 거 같은데요",
        "choices": {
            "이렇게 가까이 있으니 알 수 있어요.": "4_9",
            "하루의 모든 순간을 하루 씨와 함께하면 좋을 텐데.": "4_10"
        }
    },
    "4_8": {
        "text": "하루마사: 그건... 저도 마찬가지거든요. \n아카리: 그럼... 괜찮죠?\n(하루마사는 고개를 살짝 끄덕인다.)",
        "choices": {
            "하루마사에게 입을 맞춘다": "",
            "": ""
        }
    },
    "4_9": {
        "text": "하루마사: 뭘 말이죠.\n아카리: 하루 씨가 저와 더 가까워지고 싶어 한다는 거 말이에요.\n하루마사: 아니거든요.\n아카리: 진짜 아닌가요?",
        "choices": {
            "흐음- 잘못 짚었나-": "4_11",
            "거짓말 되게 못하시는데.": "4_12"
        }
    },
    "4_10": {
        "text": "하루마사: 그건.... 저도거든요.\n아카리: 다행이에요.",
        "choices": {
            "하루마사를 가볍게 끌어안는다": "",
            "하루마사에게 입을 맞춘다": ""
        }
    },
    "4_11": {
        "text": "하루마사: 진짜- 오늘따라 이상하시네.\n아카리: 하루 씨도 정신을 못 차리시는 거 같은데.\n하루마사: 아카리 씨와 이렇게 붙어 있는데 당연하죠.\n아카리: 당연한 건가요-\n하루마사: 그야, 아카리 씨가 좋으니까.\n(그렇게 말하는 하루마사의 얼굴은...)\n아카리: 아하하, 얼굴 완전 빨간데요.",
        "choices": {
            "하루마사를 가볍게 끌어안는다": "",
            "하루마사에게 입을 맞춘다": ""
        }
    },
    "4_12": {
        "text": "하루마사: 으음- 오늘따라 이상하네요.\n아카리: 확실히 그래 보여요.\n하루마사: 어쩔 수 없네요.\n아카리: 뭘요?\n하루마사: 아카리 씨가 너무 좋으니까.\n하루마사: 키스해도 될까요?",
        "choices": {
            "미소짓는다": "",
            "기다리고 있었어요.": ""
        }
    },








};




function updateDialogue() {
    const currentDialogue = dialogueData[currentPath];

    if (!currentDialogue) {
        console.error("대화 데이터가 존재하지 않습니다. currentPath:", currentPath);
        document.getElementById("currentDialogue").innerText = "대화 데이터를 불러오지 못했습니다.";
        return;
    }

    // 이미지 설정
    const gameImage = document.getElementById("gameImage");
    if (currentDialogue.image) {
        gameImage.src = currentDialogue.image;
    } else {
        gameImage.src = "images/default.png";
    }

    // 텍스트 출력
    document.getElementById("currentDialogue").innerText = currentDialogue.text;

    // 선택지 출력
    const choicesDiv = document.querySelector(".choices");
    choicesDiv.innerHTML = "";
    if (currentDialogue.choices) {
        for (const choice in currentDialogue.choices) {
            const button = document.createElement("button");
            button.innerText = choice;
            button.onclick = () => {
                currentPath = currentDialogue.choices[choice];
                updateDialogue();
            };
            choicesDiv.appendChild(button);
        }
    }
}


// 대화 업데이트
function updateDialogue() {
    const currentDialogue = dialogueData[currentPath];
    if (!currentDialogue) {
        console.error("대화 데이터가 존재하지 않습니다:", currentPath);
        return;
    }
    // 이미지 경로 설정
    if (currentDialogue.image) {
        gameImage.src = currentDialogue.image; // 대화 데이터에 있는 이미지 경로 사용
    } else {
        gameImage.src = "images/default.png"; // 기본 이미지로 복원
    }

    // 대화 텍스트 출력
    typeText(currentDialogue.text, "currentDialogue", () => {
        const choicesDiv = document.querySelector(".choices");
        choicesDiv.innerHTML = "";

        // 선택지 버튼 생성
        if (currentDialogue.choices) {
            for (const choice in currentDialogue.choices) {
                const button = document.createElement("button");
                button.className = "choice";
                button.innerText = choice;
                button.onclick = () => {
                    addToHistory("", currentDialogue.text); // 대화 지문 추가
                    addToHistory(playerName, choice); // 플레이어 선택 추가

                    currentPath = currentDialogue.choices[choice]; // 다음 대화 경로로 이동
		    choicesDiv.innerHTML = "";
                    updateDialogue(); // 대화 갱신
                };
                choicesDiv.appendChild(button);
            }
        }

        // 타이핑 효과 종료 후 자동 스크롤
        setTimeout(() => {
            dialogueContainer.scrollTop = dialogueContainer.scrollHeight;
        }, 100); // 약간의 딜레이를 추가하여 확실히 렌더링 후 동작
    });
}

// 타이핑 효과
function typeText(text, elementId, callback) {
    let i = 0;
    const element = document.getElementById(elementId);
    const dialogueContainer = document.querySelector(".dialogue-box");
    element.innerHTML = ""; // 기존 텍스트 초기화

    const interval = setInterval(() => {
        element.innerHTML += text[i] === "\n" ? "<br>" : text[i]; // 줄바꿈 변환
        i++;

        // **타이핑 중에도 스크롤을 따라가도록 설정**
        dialogueContainer.scrollTop = dialogueContainer.scrollHeight;

        if (i >= text.length) {
            clearInterval(interval);
            if (callback) callback(); // 타이핑 완료 후 콜백 실행
        }
    }, 50); // 50ms 간격으로 타이핑
}

// 대화 내역 추가
function addToHistory(speaker, message) {
    const historyDiv = document.getElementById("historyContent");

    // 새로운 메시지를 아래쪽에 추가
    const newMessage = document.createElement("p");
    newMessage.innerHTML = `<strong>${speaker}:</strong> ${message.replace(/\n/g, "<br>")}`;
    historyDiv.appendChild(newMessage);

    // 스크롤을 항상 최신 메시지로 이동
    historyDiv.scrollTop = historyDiv.scrollHeight;
}

// 대화 내역 표시/숨기기
function toggleHistory() {
    const historyDiv = document.getElementById("history");
    if (historyDiv.style.display === "none" || historyDiv.style.display === "") {
        historyDiv.style.display = "block";
    } else {
        historyDiv.style.display = "none";
    }
}

// 게임 초기화
function restartGame() {
    currentPath = "start";
    historyContent = [];
    lastChoice = "기본 이름";

    // 대화 내역 초기화
    const historyDiv = document.getElementById("historyContent");
    historyDiv.innerHTML = "";

    // 저장된 슬롯 초기화
    for (let i = 1; i <= 4; i++) {
        localStorage.removeItem(`slot${i}`);
    }

    updateDialogue();
    alert("게임이 초기화되었습니다. 모든 슬롯이 초기화되었습니다.");
}

// 저장 UI 표시
function showSaveUI() {
    const saveDiv = document.getElementById("saveSlots");
    saveDiv.innerHTML = "";

    for (let i = 1; i <= 4; i++) {
        const slotName = localStorage.getItem(`slot${i}`)
            ? `슬롯 ${i}: ${JSON.parse(localStorage.getItem(`slot${i}`)).lastChoice}`
            : `슬롯 ${i}: 빈 슬롯`;
        const button = document.createElement("button");
        button.innerText = slotName;
        button.onclick = () => saveGame(i);
        saveDiv.appendChild(button);
    }

    openModal("saveModal");
}

// 불러오기 UI 표시
function showLoadUI() {
    const loadDiv = document.getElementById("loadSlots");
    loadDiv.innerHTML = "";

    for (let i = 1; i <= 4; i++) {
        const slotName = localStorage.getItem(`slot${i}`)
            ? `슬롯 ${i}: ${JSON.parse(localStorage.getItem(`slot${i}`)).lastChoice}`
            : `슬롯 ${i}: 빈 슬롯`;
        const button = document.createElement("button");
        button.innerText = slotName;
        button.onclick = () => loadGame(i);
        loadDiv.appendChild(button);
    }

    openModal("loadModal");
}

// 저장 기능
function saveGame(slot) {
    const saveData = {
        path: currentPath,
        lastChoice: lastChoice
    };
    localStorage.setItem(`slot${slot}`, JSON.stringify(saveData));
    alert(`슬롯 ${slot}에 저장되었습니다.`);
}

// 불러오기 기능
function loadGame(slot) {
    const saveData = localStorage.getItem(`slot${slot}`);
    if (saveData) {
        const parsedData = JSON.parse(saveData);
        currentPath = parsedData.path;
        lastChoice = parsedData.lastChoice;
        updateDialogue();
        alert(`슬롯 ${slot}에서 불러왔습니다.`);
    } else {
        alert("저장된 데이터가 없습니다.");
    }
}

// 테마 전환
function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");

    document.body.style.color = isDark ? "#f0f0f0" : "#121212";

    document.querySelectorAll(".choice, .menu button, .modal-content button").forEach(button => {
        button.style.color = isDark ? "#f0f0f0" : "#121212";
        button.style.backgroundColor = isDark ? "#444" : "#007bff";
        button.style.borderColor = isDark ? "#555" : "#0056b3";
    });

    const dialogueBox = document.querySelector(".dialogue-box");
    dialogueBox.style.backgroundColor = isDark ? "#333" : "#f9f9f9";
    dialogueBox.style.color = isDark ? "#dcdcdc" : "#121212";

    const historyBox = document.getElementById("history");
    historyBox.style.backgroundColor = isDark ? "#333" : "#f9f9f9";
    historyBox.style.color = isDark ? "#dcdcdc" : "#121212";
}

// 모달 열기/닫기
function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

// 초기화
window.onload = function () {
    updateDialogue();
};
