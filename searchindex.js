Search.setIndex({docnames:["content/01-proportions/one-sample-post-hoc-tests-py","content/01-proportions/one-sample-post-hoc-tests-r","content/01-proportions/one-sample-tests-py","content/01-proportions/one-sample-tests-r","content/01-proportions/two-sample-tests-py","content/01-proportions/two-sample-tests-r","intro"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":5,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,"sphinxcontrib.bibtex":9,sphinx:56},filenames:["content/01-proportions/one-sample-post-hoc-tests-py.ipynb","content/01-proportions/one-sample-post-hoc-tests-r.ipynb","content/01-proportions/one-sample-tests-py.ipynb","content/01-proportions/one-sample-tests-r.ipynb","content/01-proportions/two-sample-tests-py.ipynb","content/01-proportions/two-sample-tests-r.ipynb","intro.md"],objects:{},objnames:{},objtypes:{},terms:{"0":[0,1,2,3,4,5],"0001":[2,3,4,5],"00011":1,"00021895317390182282":4,"000266387917877191":1,"001":1,"001106636048348250":1,"0062176026593266705":2,"006218":3,"01628405548254":1,"02":1,"02511":1,"05":[0,1,2,3,4,5],"07186":1,"072":1,"0f0lbs_binomi":[2,3],"0f0lbs_multinomi":[0,2,3],"1":[0,1,2,3,4,5,6],"10":[0,2,4],"1010bz":5,"1010y":3,"1010z":3,"11":[0,2,4],"1111ai":5,"1111x":3,"1111z":3,"12":[0,2,4],"1212bz":5,"1212x":3,"1212y":3,"13":[0,2,4],"1313ai":5,"1313y":3,"1313z":3,"14":[0,1,2,4,5],"1414by":5,"1414y":3,"15":[0,2,4],"1515ai":5,"1515y":3,"1515z":3,"16":[0,2,4],"1616by":5,"1616x":3,"1616y":3,"17":[0,1,2,3,4],"1717ai":5,"1717x":3,"18":[0,2,3,4],"1818bx":5,"1818y":3,"1818z":3,"19":[0,2,3,4,5],"1919ai":5,"1919y":3,"1919z":3,"1ai":5,"1f2lbs_multinomi":[4,5],"1y":3,"1z":3,"2":[0,1,2,3,4,5,6],"20":[0,1,2,3,4,5],"200":[2,3,4,5,6],"2020bz":5,"2020x":3,"2020z":3,"2025755":3,"21":[4,5],"22":4,"23":4,"24":[1,4],"24001455110448":1,"25":1,"252170138338781e":4,"252e":5,"26":[4,5],"2bx":5,"2y":3,"2z":3,"3":[0,1,2,3,4,5],"3166667":3,"35":[1,2,3],"3ax":5,"3x":3,"3z":3,"4":[0,2,3,4,5],"40":[4,5],"402":5,"402062415325055":4,"41":[2,3],"43":1,"432e":5,"4495597":3,"4939020624928670":1,"4by":5,"4x":3,"4y":3,"5":[0,1,2,3,4,5],"52":1,"5ai":5,"5y":3,"5z":3,"6":[0,2,3,4,5],"60":[2,3,4,5],"6bx":5,"6x":3,"6z":3,"7":[0,2,3,4,5],"7099":4,"756e":3,"7ai":5,"7y":3,"7z":3,"8":[0,1,2,3,4,5],"81":[1,3,5],"8333050401877814e":4,"833e":5,"868956527179467e":2,"869e":3,"87478991596639":4,"875":5,"88":[4,5],"8bx":5,"8x":3,"8z":3,"9":[0,1,2,3,4,5],"90":[2,3],"95":3,"9568155823045":1,"96":1,"9ai":5,"9y":3,"9z":3,"\u03c72":[1,2,3,4,5],"import":[0,2,3,4],"int":[3,5],"long":[2,3,4,5],"true":3,"try":4,A:[1,2,3,4,5,6],For:1,In:2,It:4,No:[2,3,4,5],The:4,_:[0,4],adjust:1,against:1,also:[3,5],altern:[3,5],an:[2,3,5],approxim:5,associ:[4,5],avail:4,b:[4,5],between:[4,5],binom:[1,3],binom_p_valu:0,binom_result:0,binom_test:2,binomi:[1,6],binomtest:0,bonferroni:[0,1],book:6,both:6,c:1,call:2,can:[3,5],categor:[4,5],categori:[0,1,2,3,4,5,6],cell:2,chanc:[1,2,3],chi2_conting:4,chi:6,chisq:[1,3,5],chisquar:2,chr:[3,5],column:[2,3],com:4,comparison:[0,1],confid:3,contrast:[0,1],correct:[0,1],count:[0,2,3,4,5],crosstab:[4,5],csv:[0,2,3,4,5],data:[0,1,2,3,4,5],defin:2,df:[0,1,2,3,4,5],differ:[0,1,2,3],doe:4,dof:4,each:[1,4,5],equal:3,error:1,estim:3,exact:[0,1,2,3,6],exampl:[2,3,4,5],exp_freq:4,factor:[1,3,4,5],filter:4,find:6,fisher:6,fisher_exact:4,follow:4,format:[2,3,4,5],found:1,frame:[3,5],from:[0,1,2,3,4],full:2,g:6,g_stat:4,github:4,given:3,gpl:4,gt:[3,5],have:[1,3,5],head:[0,2,3,4,5],help:6,higher:1,holm:[0,1],http:4,hypothesi:[3,5],id:[3,5],incorrect:5,index:0,indic:[0,1,2,3,4,5],instal:[1,3,5],instead:4,interv:3,isin:4,isn:4,issu:4,jupyt:6,kind:1,lambda_:4,languag:6,last:2,len:[0,2],length:3,level:[0,1,5],librari:[1,3,5],licens:4,like:4,likelihood:4,line:2,loc:4,log:4,lower:1,lt:[3,5],m:5,mai:[1,3,5],make:[3,4,5],margin:1,messag:5,method:[0,1],more:4,most:2,multcomp:1,multinomi:[0,6],multipletest:0,multitest:0,n:[1,2,3,4,5,6],n_cat:2,name:2,nameerror:2,nomin:[3,5],non:4,np:2,nrow:1,number:3,numpi:2,nuniqu:2,object:1,omnibu:[0,1],one:[1,2,3],onli:[1,4],out:[2,3],outcom:[2,3,4,5],p:[0,1,2,3,4,5],packag:[1,3,5],pairwis:[0,1],panda:[0,2,4],pd:[0,2,4],pearson:6,percent:3,pmf:2,power_divergenceresult:2,prob:3,probabl:3,procedur:[0,1],proport:1,pvals_correct:0,pvalu:[0,2],python:6,qchisq:1,r:[0,4,6],read:[3,5],read_csv:[0,2,4],readili:4,recent:2,recommend:4,reject:0,relat:4,rep:3,report:[0,1,2,3,4,5],respons:[0,1,2,3,4,5,6],row:1,run:[5,6],rvaidememoir:[1,3,5],s:[0,1,2,3,6],sake:4,scipi:[0,2,4],see:[1,3,5],sequenti:[0,1],shorten:[3,5],show:[1,4,5],side:[2,3,5],signific:[4,5],significantli:[0,1,2,3],specif:1,squar:6,stat:[0,2,4],statist:[0,1,2,3,4,5],statnam:3,statsmodel:0,subject:[2,3,4,5],success:3,sum:[0,1,2],sxy:5,sy:3,t:4,tabl:[2,3,4,5],than:[1,4],thi:[3,5],three:1,todo:[1,3,5],traceback:[1,2],trial:3,troubl:[1,3,5],two:[2,3],ubuntu:[1,3,5],unus:[3,5],us:[0,1,2,3,4,5],v:[1,3,5],valu:[1,2,3,5],value_count:[0,2],w:[2,3,4,5],wa:1,warn:5,were:[0,1,2,3],where:1,work:4,x:[0,1,2,3,4,5],xmulti:3,xnomial:3,xt:[1,2,3,4,5],xtab:[3,5],y:[0,1,2,3,4,5],ye:[2,3,4,5],you:[1,3,5,6],z:[0,1,2,3,4,5]},titles:["Post Hoc Analysis for One Sample Tests of Proportion - Python","One Sample Post Hoc Tests","One Sample Tests of Proportion - Python","One Sample Tests of Proportion - R","Two Sample Tests of Proportion - Python","Two Sample Tests of Proportion - R","Statistical Analysis and Reporting"],titleterms:{One:[0,1,2,3,6],analysi:[0,6],binomi:[0,2,3],chi:[1,2,3,4,5],content:6,exact:[4,5],fisher:[4,5],full:6,g:[4,5],hoc:[0,1],index:6,multinom:1,multinomi:[1,2,3],pearson:[1,2,3,4,5],post:[0,1],proport:[0,2,3,4,5,6],python:[0,2,4],r:[3,5],report:6,s:[4,5],sampl:[0,1,2,3,4,5,6],squar:[1,2,3,4,5],statist:6,tabl:6,test:[0,1,2,3,4,5,6],two:[4,5,6]}})