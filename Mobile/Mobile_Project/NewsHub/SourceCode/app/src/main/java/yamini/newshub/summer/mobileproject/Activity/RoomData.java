package yamini.newshub.summer.mobileproject.Activity;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.ItemTouchHelper;
import androidx.recyclerview.widget.RecyclerView;

import android.content.Context;
import android.content.Intent;
import android.net.ConnectivityManager;
import android.net.NetworkInfo;
import android.os.Bundle;
import android.view.View;
import android.widget.ImageView;
import android.widget.Toast;

import java.util.List;

import yamini.newshub.summer.mobileproject.Adapter.RoomRecyclerAdapter;
import yamini.newshub.summer.mobileproject.R;
import yamini.newshub.summer.mobileproject.Repository.Repository;
import e.vatsal.kesarwani.mobileproject.Room.NewsEntity;

public class RoomData extends AppCompatActivity {

    private RecyclerView recyclerView;
    private RoomRecyclerAdapter recyclerAdapter;
    //private ImageView delete;
    private Repository repository;
    private NewsEntity newsEntity;
    private Context context=this;
    private boolean isConnected;
    private List<NewsEntity> newss;
    private ImageView back;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_room_data);

        initview();
        back.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (!isConnected){
                    finishAffinity();
                    finish();
                }
                else
                startActivity(new Intent(getApplicationContext(),homefinal.class));
            }
        });

        ConnectivityManager cm = (ConnectivityManager) context.getSystemService(Context.CONNECTIVITY_SERVICE);
        assert cm != null;
        final NetworkInfo activeNetwork = cm.getActiveNetworkInfo();
        isConnected = activeNetwork != null &&
                activeNetwork.isConnectedOrConnecting();

        newsEntity=new NewsEntity(null,null,null,null,null,null,null,null);


        /*delete.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                repository.delete(newsEntity);
                Toast.makeText(RoomData.this, "All news deleted", Toast.LENGTH_SHORT).show();
            }
        });*/

    }

    private void initview() {

        /*delete=findViewById(R.id.deleteSavedNews);
        delete.setVisibility(View.VISIBLE);*/

        back=findViewById(R.id.imageView);
        repository = new Repository(getApplication());

        newss = repository.getAllNews();

        recyclerView=findViewById(R.id.roomRecycle);

        recyclerAdapter=new RoomRecyclerAdapter(this,newss,getApplication());
        new ItemTouchHelper(itemTouch).attachToRecyclerView(recyclerView);
        recyclerView.setAdapter(recyclerAdapter);
    }

    ItemTouchHelper.SimpleCallback itemTouch=new ItemTouchHelper.SimpleCallback(0,ItemTouchHelper.LEFT | ItemTouchHelper.RIGHT) {
        @Override
        public boolean onMove(@NonNull RecyclerView recyclerView, @NonNull RecyclerView.ViewHolder viewHolder, @NonNull RecyclerView.ViewHolder target) {
            return false;
        }

        @Override
        public void onSwiped(@NonNull RecyclerView.ViewHolder viewHolder, int direction) {
            repository.delete(newss.get(viewHolder.getAdapterPosition()));
            newss.remove(viewHolder.getAdapterPosition());
            Toast.makeText(context, "Deleted", Toast.LENGTH_SHORT).show();
            recyclerAdapter.notifyDataSetChanged();
        }
    };

    @Override
    public void onBackPressed() {
        super.onBackPressed();
        if (!isConnected){
            finishAffinity();
            finish();
        }
    }
}
