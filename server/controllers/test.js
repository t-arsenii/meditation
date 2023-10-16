import Question from "../models/Question.js"
import Answer from "../models/Answer.js";
import Combination from "../models/Combination.js";
import User from "../models/User.js";

//Dodanie pytan odpowiezi i kombinacji

export const addQueAnswKomb = async (req, res) => {
        try {
          const answerExist = await Answer.find({});
          const questionExist = await Question.find({});
          const combinationExist = await Combination.find({});
          if(combinationExist.length >0 || answerExist.length >0 || questionExist.length > 0){
            console.log("Pytania już istnieją w bazie danych.");
            res.json({ message: 'Pytania już istnieją w bazie danych.' });
            

          }else{
            const answer1 = new Answer({
              answerText: 'Redukcja stresu'
            });
            const savedAnswer1 = await answer1.save();
            const answerId1 = savedAnswer1._id;
            
            const answer2 = new Answer({
            answerText: 'Poprawa zdrowia psychicznego'
            });
            const savedAnswer2 = await answer2.save();
            const answerId2 = savedAnswer2._id;
            
            const answer3 = new Answer({
            answerText: 'Koncentracja'
            });
            const savedAnswer3 = await answer3.save();
            const answerId3 = savedAnswer3._id;
            
            const answer4 = new Answer({
            answerText: 'Inne'
            });
            const savedAnswer4 = await answer4.save();
            const answerId4 = savedAnswer4._id;
            
            const answer5 = new Answer({
            answerText: 'Statyczna'
            });
            const savedAnswer5 = await answer5.save();
            const answerId5 = savedAnswer5._id;
            
            const answer6 = new Answer({
            answerText: 'Dynamiczna'
            });
            const savedAnswer6 = await answer6.save();
            const answerId6 = savedAnswer6._id;
            
            const answer7 = new Answer({
            answerText: 'Początkujący'
            });
            const savedAnswer7 = await answer7.save();
            const answerId7 = savedAnswer7._id;
            
            const answer8 = new Answer({
            answerText: 'Średniozaawansowany'
            });
            const savedAnswer8 = await answer8.save();
            const answerId8 = savedAnswer8._id;
            
            const answer9 = new Answer({
            answerText: 'Zaawansowany'
            });
            const savedAnswer9 = await answer9.save();
            const answerId9 = savedAnswer9._id;
            
            
            
            const question1 = new Question({
            questionText: 'Jakie są Twoje cele związane z medytacją?',
            possibleAnswers: [answerId1, answerId2, answerId3,answerId4]
            });
            const savedQuestion1 = await question1.save();
            const questionId1 = savedQuestion1._id;
            
            const question2 = new Question({
            questionText: 'Czy preferujesz medytację dynamiczną czy statyczną?',
            possibleAnswers: [answerId5, answerId6]
            });
            const savedQuestion2 = await question2.save();
            const questionId2 = savedQuestion2._id;
            
            const question3 = new Question({
            questionText: 'Jaki jest Twój poziom doświadczenia w medytacji',
            possibleAnswers: [answerId7, answerId8, answerId9]
            });
            const savedQuestion3 = await question3.save();
            const questionId3 = savedQuestion3._id;
               
            const combinations = [
              { 
                  name: 'Kombinacja 1', 
                  question1: questionId1, 
                  answer1: answerId1,
                  question2: questionId2, 
                  answer2: answerId5,
                  question3: questionId3, 
                  answer3: answerId7,
              },
              { 
                name: 'Kombinacja 2', 
                question1: questionId1, 
                answer1: answerId2,
                question2: questionId2, 
                answer2: answerId5,
                question3: questionId3, 
                answer3: answerId7,
            },
            { 
              name: 'Kombinacja 3', 
              question1: questionId1, 
              answer1: answerId3,
              question2: questionId2, 
              answer2: answerId5,
              question3: questionId3, 
              answer3: answerId7,
          },
          { 
            name: 'Kombinacja 4', 
            question1: questionId1, 
            answer1: answerId4,
            question2: questionId2, 
            answer2: answerId5,
            question3: questionId3, 
            answer3: answerId7,
        },
        { 
          name: 'Kombinacja 5', 
          question1: questionId1, 
          answer1: answerId1,
          question2: questionId2, 
          answer2: answerId6,
          question3: questionId3, 
          answer3: answerId7,
        },
        { 
          name: 'Kombinacja 6', 
          question1: questionId1, 
          answer1: answerId2,
          question2: questionId2, 
          answer2: answerId6,
          question3: questionId3, 
          answer3: answerId7,
        },
        { 
          name: 'Kombinacja 7', 
          question1: questionId1, 
          answer1: answerId3,
          question2: questionId2, 
          answer2: answerId6,
          question3: questionId3, 
          answer3: answerId7,
        },
        { 
          name: 'Kombinacja 8', 
          question1: questionId1, 
          answer1: answerId4,
          question2: questionId2, 
          answer2: answerId6,
          question3: questionId3, 
          answer3: answerId7,
        },
        { 
          name: 'Kombinacja 9', 
          question1: questionId1, 
          answer1: answerId1,
          question2: questionId2, 
          answer2: answerId5,
          question3: questionId3, 
          answer3: answerId8,
        },
        { 
          name: 'Kombinacja 10', 
          question1: questionId1, 
          answer1: answerId2,
          question2: questionId2, 
          answer2: answerId5,
          question3: questionId3, 
          answer3: answerId8,
        },
        { 
          name: 'Kombinacja 11', 
          question1: questionId1, 
          answer1: answerId3,
          question2: questionId2, 
          answer2: answerId5,
          question3: questionId3, 
          answer3: answerId8,
        },
        { 
          name: 'Kombinacja 12', 
          question1: questionId1, 
          answer1: answerId4,
          question2: questionId2, 
          answer2: answerId5,
          question3: questionId3, 
          answer3: answerId8,
        },
        { 
          name: 'Kombinacja 13', 
          question1: questionId1, 
          answer1: answerId1,
          question2: questionId2, 
          answer2: answerId6,
          question3: questionId3, 
          answer3: answerId8,
        },
        { 
          name: 'Kombinacja 14', 
          question1: questionId1, 
          answer1: answerId2,
          question2: questionId2, 
          answer2: answerId6,
          question3: questionId3, 
          answer3: answerId8,
        },{ 
          name: 'Kombinacja 15', 
          question1: questionId1, 
          answer1: answerId3,
          question2: questionId2, 
          answer2: answerId6,
          question3: questionId3, 
          answer3: answerId8,
        },
        { 
          name: 'Kombinacja 16', 
          question1: questionId1, 
          answer1: answerId4,
          question2: questionId2, 
          answer2: answerId6,
          question3: questionId3, 
          answer3: answerId8,
        },
        { 
          name: 'Kombinacja 17', 
          question1: questionId1, 
          answer1: answerId1,
          question2: questionId2, 
          answer2: answerId5,
          question3: questionId3, 
          answer3: answerId9,
        },
        { 
          name: 'Kombinacja 18', 
          question1: questionId1, 
          answer1: answerId2,
          question2: questionId2, 
          answer2: answerId5,
          question3: questionId3, 
          answer3: answerId9,
        },
        { 
          name: 'Kombinacja 19', 
          question1: questionId1, 
          answer1: answerId3,
          question2: questionId2, 
          answer2: answerId5,
          question3: questionId3, 
          answer3: answerId9,
        },
        { 
          name: 'Kombinacja 20', 
          question1: questionId1, 
          answer1: answerId4,
          question2: questionId2, 
          answer2: answerId5,
          question3: questionId3, 
          answer3: answerId9,
        },
        { 
          name: 'Kombinacja 21', 
          question1: questionId1, 
          answer1: answerId1,
          question2: questionId2, 
          answer2: answerId6,
          question3: questionId3, 
          answer3: answerId9,
        },
        { 
          name: 'Kombinacja 22', 
          question1: questionId1, 
          answer1: answerId2,
          question2: questionId2, 
          answer2: answerId6,
          question3: questionId3, 
          answer3: answerId9,
        },
        { 
          name: 'Kombinacja 23', 
          question1: questionId1, 
          answer1: answerId3,
          question2: questionId2, 
          answer2: answerId6,
          question3: questionId3, 
          answer3: answerId9,
        },
        { 
          name: 'Kombinacja 24', 
          question1: questionId1, 
          answer1: answerId4,
          question2: questionId2, 
          answer2: answerId6,
          question3: questionId3, 
          answer3: answerId9,
        },
          ];
            const savedCombinations = await Combination.insertMany(combinations);
            console.log("Pomyślnie dodano pytania odpowiedzi i kombinacji do bazy danych:");
            res.json({ message: 'Pomyślnie dodano pytania odpowiedzi i kombinacji do bazy danych:' });
          }
          
      } catch (error) {
          console.error(error);
          res.status(500).json({ message: 'Coś poszło nie tak.' });
      }

}




