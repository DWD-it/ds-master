// struct Node{int data;Node* next;};
//int main(void){
Node*head = NULL;
head = new Node{10 , NULL};
// head -> next = new Node{20 , NULL};
// head -> next-> next = new Node{30 , NULL};
// int sum = 0;
Node* temp = head;
while (temp != NULL)
{sum += temp -> data;temp = temp -> next;}
// cout << "sum= " << sum;}