package yamini.newshub.summer.mobileproject.Activity;

import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;
import androidx.swiperefreshlayout.widget.SwipeRefreshLayout;

import android.content.Context;
import android.content.Intent;
import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.ImageView;
import android.widget.TextView;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.util.ArrayList;

import yamini.newshub.summer.mobileproject.Adapter.RecyclerAdapter;
import yamini.newshub.summer.mobileproject.Model.Article;
import yamini.newshub.summer.mobileproject.Model.News;
import yamini.newshub.summer.mobileproject.R;
import yamini.newshub.summer.mobileproject.Model.RecycleData;
import yamini.newshub.summer.mobileproject.api.ApiClient;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class MainActivity extends AppCompatActivity {

    public final String base_url = "https://newsapi.org/v2/";
    public final String apiKey = "1316a3a46ab7495dbac82df10d54539e";
    public final String country = "in";
    public String category;
    private Context context = this;
    private Intent intent;
    private ImageView back;
    private TextView appTitle;
    private RecyclerView mrecyclerView;
    private RecyclerView.LayoutManager mLayoutManager;
    private RecyclerAdapter mrecycleAdapter;
    private SwipeRefreshLayout mSwipe;

    final ArrayList<RecycleData> mdata = new ArrayList<>();

    public ApiClient api;

    private TextView text;
    /*//database
    private Repository repository;
    private List<NewsEntity> newss;*/

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        initviews();

        mSwipe.setOnRefreshListener(
                new SwipeRefreshLayout.OnRefreshListener() {
                    @Override
                    public void onRefresh() {
                        mSwipe.setRefreshing(true);
                    }
                }
        );

        Gson gson = new GsonBuilder().serializeNulls().create();

        category = intent.getStringExtra("news");
        appTitle.setText(category);
        //Toast.makeText(context, ""+category, Toast.LENGTH_SHORT).show();

        /*repository = new Repository(getApplication());*/


       /*HttpLoggingInterceptor httpLoggingInterceptor=new HttpLoggingInterceptor();
        httpLoggingInterceptor.setLevel(HttpLoggingInterceptor.Level.BODY);
        OkHttpClient okHttpClient= new OkHttpClient.Builder()
                .addInterceptor(httpLoggingInterceptor)
                .build();*/

        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl(base_url)
                .addConverterFactory(GsonConverterFactory.create(gson))
                //.client(okHttpClient)
                .build();
        api = retrofit.create(ApiClient.class);

        Call<News> call = api.getNews(category, apiKey);
        // Call<News> call = api.getNews();

        call.enqueue(new Callback<News>() {
            @Override
            public void onResponse(Call<News> call, Response<News> response) {
                if (!response.isSuccessful()) {
                    //titletxt.setText("Code: "+response.body().getArticle().get(1).getAuthor());
                    return;
                }

                ArrayList<Article> art = response.body().getArticle();
                Log.v("Tag", "" + art.get(1).getAuthor());

                try {

                    for (int i = 0; i < art.size(); i++) {
                        String content = "";
                        content += "Name: " + art.get(i).getSource().getName() + "\n";
                        content += "Author: " + art.get(i).getAuthor() + "\n";
                        content += "Title: " + art.get(i).getTitle() + "\n";
                        content += "Description: " + art.get(i).getDescription() + "\n";
                        content += "Published At: " + art.get(i).getPublishedAt() + "\n";
                        content += "Content: " + art.get(i).getContent() + "\n\n";


                        // titletxt.append(content);
                        mdata.add(new RecycleData(
                                        art.get(i).getUrlToImage(),
                                        art.get(i).getTitle(),
                                        art.get(i).getDescription(),
                                        art.get(i).getSource().getName(),
                                        art.get(i).getContent(),
                                        art.get(i).getUrlToImage(),
                                        art.get(i).getUrl(),
                                        art.get(i).getPublishedAt()
                                )
                        );

                        /*NewsEntity newsEntity = new NewsEntity(art.get(i).getSource().getName(),
                                art.get(i).getAuthor(),
                                art.get(i).getTitle(),
                                art.get(i).getDescription(),
                                art.get(i).getUrl(),
                                art.get(i).getUrlToImage(),
                                art.get(i).getPublishedAt(),
                                art.get(i).getContent());

                        repository.insert(newsEntity);*/

                    }
                }
                catch (Exception e) {
                    text.setText("" + e);
                }

                //recycler view setup
                mrecyclerView = findViewById(R.id.recycle);
                mrecyclerView.setHasFixedSize(true);

                mLayoutManager = new LinearLayoutManager(context);

                mrecycleAdapter = new RecyclerAdapter(mdata, MainActivity.this);

                mrecyclerView.setLayoutManager(mLayoutManager);
                mrecyclerView.setAdapter(mrecycleAdapter);

                back.setOnClickListener(new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        startActivity(new Intent(getApplicationContext(),homefinal.class));
                        finish();
                    }
                });

            }

            @Override
            public void onFailure(Call<News> call, Throwable t) {
                text.setText(t.getMessage());
            }
        });

    }

    private void initviews() {
        text = findViewById(R.id.tee);
        mSwipe = findViewById(R.id.refresh);
        back=findViewById(R.id.back2);
        appTitle=findViewById(R.id.apptitle);
        intent = getIntent();
    }

    @Override
    public void onBackPressed() {
        super.onBackPressed();
        startActivity(new Intent(getApplicationContext(),homefinal.class));
    }
}
