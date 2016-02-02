#include <node.h>
#include <vector>
#include <stdlib.h>
#include <iostream>

using namespace std;
using namespace v8;

int compare (const void * a, const void * b)
{
  if (*(double*)a > *(double*)b) return 1;
  else if (*(double*)a < *(double*)b) return -1;
  else return 0;
}

void Add(const FunctionCallbackInfo<Value>& args) {
  Isolate* isolate = Isolate::GetCurrent();
  HandleScope scope(isolate);

  if (args.Length() < 2) {
    isolate->ThrowException(Exception::TypeError(
        String::NewFromUtf8(isolate, "Wrong number of arguments")));
    return;
  }

  if (!args[0]->IsNumber() || !args[1]->IsNumber()) {
    isolate->ThrowException(Exception::TypeError(
        String::NewFromUtf8(isolate, "Wrong arguments")));
    return;
  }

  double value = args[0]->NumberValue() + args[1]->NumberValue();
  Local<Number> num = Number::New(isolate, value);

  args.GetReturnValue().Set(num);
}


void AddEmpty(const FunctionCallbackInfo<Value>& args) {
	return;
}

void Sort(const FunctionCallbackInfo<Value>& args) {
	Isolate* isolate = Isolate::GetCurrent();
	HandleScope scope(isolate);

	if (args.Length() < 1 || !args[0]->IsArray()) {
		isolate->ThrowException(
				Exception::TypeError(
						String::NewFromUtf8(isolate,
								"First argument should be an array")));
		return;
	}

	Handle<Array> arr = Handle<Array>::Cast(args[0]);
	int size = arr->Length();
//	printf("BEGIN ------- SIZE %i -------------", size);
	double other_arr[size];
	for (int i = 0; i < size; i++){
		other_arr[i] = arr->Get(i)->NumberValue();
	}


	qsort(other_arr, size, sizeof(other_arr[0]), compare);
	Handle<Array> res = Array::New(isolate, size);
	for (int i = 0; i < size; ++i) {
//	     printf ("I val: %f\n",other_arr[i]);
		res->Set(i, Number::New(isolate, other_arr[i]));
	}

	args.GetReturnValue().Set(res);

}

//void Sort(const FunctionCallbackInfo<Value>& args) {
//	  Isolate* isolate = Isolate::GetCurrent();
//	  HandleScope scope(isolate);
//
//  if (args.Length() < 1 || !args[0]->IsArray()) {
//    isolate->ThrowException(Exception::TypeError(String::NewFromUtf8(isolate, "First argument should be an array")));
//    return;
//  }
//
//  Handle<Array> arr = Handle<Array>::Cast(args[0]);
//  vector<double> v;
//  for (int i = 0; i < arr->Length(); ++i) {
//    v.push_back(arr->Get(i)->NumberValue());
//  }
//  sort(v.begin(), v.end());
//  Handle<Array> res = Array::New(isolate, v.size());
//  for (int i = 0; i < v.size(); ++i) {
////	 printf("index %i, val %f", i, v[i]);
//    res->Set(i, Number::New(isolate, v[i]));
//  }
//
//  args.GetReturnValue().Set(res);
//
//}


void Init(Handle<Object> exports) {
  NODE_SET_METHOD(exports, "add", Add);
  NODE_SET_METHOD(exports, "add_empty", Add);
  NODE_SET_METHOD(exports, "sort", Sort);
}

NODE_MODULE(add, Init)



